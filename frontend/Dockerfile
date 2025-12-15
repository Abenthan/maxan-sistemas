# ===============================
# ETAPA 1: Build del frontend
# ===============================
FROM node:18-alpine AS build

# Directorio de trabajo
WORKDIR /app

# Copiamos dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del frontend
COPY . .

# Construimos para producción
RUN npm run build


# ===============================
# ETAPA 2: Servir con Nginx
# ===============================
FROM nginx:alpine

# Copiamos configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiamos el build generado por Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos puerto 80
EXPOSE 80

# Ejecutamos Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]

