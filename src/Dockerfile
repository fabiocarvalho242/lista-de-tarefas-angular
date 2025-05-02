# Use the official Node.js image as the base image
FROM node:22-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Use a lightweight web server to serve the Angular app
FROM nginx:alpine
COPY --from=0 /app/dist/ListaDeTarefasAngular /usr/share/nginx/html

# Expose the default port used by Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
