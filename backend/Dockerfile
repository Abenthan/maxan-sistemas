# 1️⃣ Usamos una imagen liviana con Node LTS
FROM node:18-alpine

# 2️⃣ Creamos el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3️⃣ Copiamos SOLO package.json y package-lock.json
# Esto permite aprovechar cache de Docker
COPY package*.json ./

# 4️⃣ Instalamos dependencias (solo producción)
RUN npm install --omit=dev

# 5️⃣ Copiamos el resto del código del backend
COPY . .

# 6️⃣ Exponemos el puerto donde corre Express
EXPOSE 5000

# 7️⃣ Comando para iniciar el backend
CMD ["npm", "start"]
