# Usar a imagem oficial do Node.js 22 LTS (Alpine para imagens menores)
FROM node:22.0.0-alpine

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar apenas os arquivos de dependência
COPY package*.json ./

# Instalar dependências do projeto
RUN npm ci

# Instalar Angular CLI globalmente (versão futura 19)
RUN npm install -g @angular/cli@19.0.0

# Copiar todo o código-fonte da aplicação
COPY . .

# Opcional: definir o diretório de saída como o diretório padrão ao executar o container
WORKDIR /app/dist

# Comando padrão (opcional): exibir os arquivos gerados
CMD ["ls", "-la"]

