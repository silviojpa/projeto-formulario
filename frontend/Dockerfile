# Use a imagem oficial do Nginx
FROM nginx:alpine

# Copia o nosso arquivo de configuração para o lugar certo
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copia os arquivos estáticos (HTML, CSS, JS) para o diretório de arquivos estáticos
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./style.css /usr/share/nginx/html/style.css
COPY ./script.js /usr/share/nginx/html/script.js

# Expõe a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]