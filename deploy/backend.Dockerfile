# Imagen base liviana de Node LTS
FROM node:18-alpine

# Crear directorio dentro del contenedor
WORKDIR /app

# Copiar solo archivos necesarios para instalar dependencias
COPY ../backend/package*.json ./

# Instalar dependencias
RUN npm install --omit=dev

# Copiar el resto del backend
COPY ../backend .

# Exponer puerto interno del backend
EXPOSE 5000

# Iniciar servidor
CMD ["npm", "start"]
