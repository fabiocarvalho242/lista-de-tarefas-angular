# Stage 1: Build da aplicação
FROM node:22.0.0-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependência
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Instalar Angular CLI globalmente (necessário para Angular 19)
RUN npm install -g @angular/cli@19.0.0

# Copiar código-fonte
COPY . .

# Buildar aplicação
RUN npm run build -- --configuration=production

# Stage 2: Servidor de produção com Nginx
FROM nginx:1.25.3-alpine

# Copiar arquivos de configuração personalizados
COPY nginx.conf /etc/nginx/nginx.conf

# Remover conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar arquivos buildados
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor porta e iniciar Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
