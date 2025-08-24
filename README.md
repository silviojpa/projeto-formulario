# Projeto de Formulário Full-Stack com Docker

Este é um projeto de exemplo para demonstrar uma aplicação web completa, incluindo frontend, backend e banco de dados, orquestrados com Docker Compose.

O objetivo é criar um formulário de contato simples onde o usuário pode enviar seus dados. O frontend, construído com HTML, CSS e JavaScript, envia os dados para um backend (Node.js/Express), que por sua vez, salva as informações em um banco de dados PostgreSQL.

## Tecnologias Utilizadas

**Frontend:**
* **HTML:** Estrutura do formulário.
* **CSS:** Estilização da interface.
* **JavaScript:** Lógica de envio do formulário (fetch API) e validação.

**Backend:**
* **Node.js:** Ambiente de execução.
* **Express.js:** Framework para criação da API REST.
* **`cors`:** Middleware para permitir requisições do frontend.
* **`pg`:** Driver para conexão com o banco de dados PostgreSQL.

**Infraestrutura:**
* **Docker:** Para containerizar as aplicações.
* **Docker Compose:** Para definir e orquestrar os serviços (frontend, backend, banco de dados) de forma simplificada.
* **PostgreSQL:** Banco de dados relacional para armazenar as submissões do formulário.
* **Nginx:** Servidor web para servir os arquivos estáticos do frontend.

## Estrutura do Projeto
````
/meu-projeto-formulario
├── /frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
├── /backend
│   ├── server.js
│   ├── package.json
│   └── ...
├── docker-compose.yml
├── Dockerfile.frontend
└── Dockerfile.backend
````

## Como Rodar o Projeto

### Pré-requisitos
* [Docker](https://www.docker.com/get-started/) instalado e rodando na sua máquina.

### Passos
1.  **Clone o repositório:**
    ```sh
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```
2.  **Inicie os serviços com Docker Compose:**
    Na pasta raiz do projeto, execute o seguinte comando. Ele irá construir as imagens, criar os contêineres e iniciar a aplicação.
    ```sh
    docker-compose up --build
    ```
3.  **Acesse a aplicação:**
    Abra seu navegador e acesse:
    * **Frontend:** `http://localhost:8080`
    * **Backend:** `http://localhost:3000` (apenas a API)

### Como Funciona
1.  O **Docker Compose** cria uma rede virtual e inicia três contêineres: `db` (PostgreSQL), `backend` (Node.js) e `frontend` (Nginx).
2.  O **Frontend** é servido pelo Nginx na porta `8080`.
3.  O **Backend** roda na porta `3000` e se conecta ao serviço `db` (PostgreSQL) usando o nome do serviço `db` como hostname.
4.  Ao submeter o formulário no frontend, o JavaScript envia uma requisição `POST` para `http://localhost:3000/api/submit`.
5.  O servidor Node.js recebe a requisição, valida os dados e insere uma nova linha na tabela `submissions` do banco de dados PostgreSQL.

---

### Contribuições

Sinta-se à vontade para contribuir! Se encontrar algum bug ou tiver sugestões, abra uma issue

