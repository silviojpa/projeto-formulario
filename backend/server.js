const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const port = 3000;

// Configuração do PostgreSQL usando variáveis de ambiente do Docker Compose
const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Conecta ao banco de dados
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Conectado ao banco de dados PostgreSQL!');
        
        // Cria a tabela se ela não existir
        await client.query(`
            CREATE TABLE IF NOT EXISTS submissions (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('Tabela "submissions" verificada/criada com sucesso.');
    } catch (err) {
        console.error('Erro ao conectar ou criar a tabela:', err.stack);
    }
}

connectToDatabase();

// Middleware
app.use(cors());
app.use(express.json()); // Para fazer o parse do corpo das requisições JSON

// Rota para receber os dados do formulário
app.post('/api/submit', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    try {
        const queryText = 'INSERT INTO submissions(name, email, message) VALUES($1, $2, $3) RETURNING *';
        const values = [name, email, message];
        await client.query(queryText, values);
        console.log('Dados inseridos:', { name, email, message });
        res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (err) {
        console.error('Erro ao inserir dados:', err.stack);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.listen(port, () => {
    console.log(`Backend rodando em http://localhost:${port}`);
});