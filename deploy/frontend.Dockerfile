# Etapa 1: Construir frontend con Vite
FROM node:18-alpine AS build

WORKDIR /app

COPY ../frontend/package*.json ./
RUN npm install

COPY ../frontend .
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
