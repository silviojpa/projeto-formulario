# Use a imagem base oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Expõe a porta que a aplicação Express vai rodar
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "server.js"]