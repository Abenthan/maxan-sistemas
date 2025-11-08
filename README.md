# Maxan Sistemas - MVP Web Application

Sitio web MVP para Maxan Sistemas, empresa de tecnología en Medellín, Colombia. Combina servicios B2B y tienda virtual B2C.

**Slogan:** "Equipos al mejor precio, servicios con la más alta calidad."

## 🚀 Características

- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Node.js + Express + MariaDB
- **Responsive Design:** Optimizado para móviles y desktop
- **Chat Widget:** Integración con WhatsApp
- **Formulario de Contacto:** Funcional con validación
- **Catálogo de Productos:** Con sistema de cotización
- **Blog:** Artículos sobre tecnología empresarial

## 📋 Requisitos del Sistema

### Desarrollo
- Node.js 18+
- MariaDB 10.6+
- npm o yarn

### Producción (Ubuntu)
- Ubuntu 20.04+
- Node.js 18+
- MariaDB 10.6+
- nginx (opcional para producción)

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd maxanSistemas.com
```

### 2. Configurar la Base de Datos

#### Opción A: Usando Docker (Recomendado para desarrollo)
```bash
# Instalar Docker si no lo tienes
# Crear contenedor MariaDB
docker run --name maxan-mariadb \
  -e MYSQL_ROOT_PASSWORD=rootpassword \
  -e MYSQL_DATABASE=maxan_sistemas \
  -e MYSQL_USER=maxan_user \
  -e MYSQL_PASSWORD=maxan_password \
  -p 3306:3306 \
  -d mariadb:10.6

# Ejecutar scripts de base de datos
docker exec -i maxan-mariadb mysql -u root -prootpassword maxan_sistemas < database/schema.sql
docker exec -i maxan-mariadb mysql -u root -prootpassword maxan_sistemas < database/seed.sql
```

#### Opción B: MariaDB Local
```bash
# Instalar MariaDB
sudo apt update
sudo apt install mariadb-server

# Configurar MariaDB
sudo mysql_secure_installation

# Crear base de datos y usuario
sudo mysql -u root -p
```

```sql
CREATE DATABASE maxan_sistemas;
CREATE USER 'maxan_user'@'localhost' IDENTIFIED BY 'maxan_password';
GRANT ALL PRIVILEGES ON maxan_sistemas.* TO 'maxan_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

```bash
# Ejecutar scripts de base de datos
mysql -u maxan_user -p maxan_sistemas < database/schema.sql
mysql -u maxan_user -p maxan_sistemas < database/seed.sql
```

### 3. Configurar el Backend

```bash
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno (opcional, valores por defecto ya configurados)
cp .env.example .env  # Si existe
# Editar .env con tus configuraciones de BD

# Iniciar servidor de desarrollo
npm run dev
```

### 4. Configurar el Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### 5. Acceder a la aplicación

- **Frontend:** http://localhost:5173 (Vite dev server)
- **Backend API:** http://localhost:5000
- **API Health Check:** http://localhost:5000/api/health

## 🚀 Despliegue en Producción (Ubuntu)

### 1. Preparar el servidor

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar MariaDB
sudo apt install mariadb-server -y
sudo mysql_secure_installation

# Instalar nginx (opcional)
sudo apt install nginx -y

# Instalar PM2 para gestión de procesos
sudo npm install -g pm2
```

### 2. Configurar la base de datos en producción

```bash
# Crear base de datos y usuario
sudo mysql -u root -p
```

```sql
CREATE DATABASE maxan_sistemas;
CREATE USER 'maxan_user'@'localhost' IDENTIFIED BY 'tu_password_seguro';
GRANT ALL PRIVILEGES ON maxan_sistemas.* TO 'maxan_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

```bash
# Ejecutar scripts de base de datos
mysql -u maxan_user -p maxan_sistemas < database/schema.sql
mysql -u maxan_user -p maxan_sistemas < database/seed.sql
```

### 3. Desplegar la aplicación

```bash
# Clonar el repositorio
git clone <repository-url>
cd maxanSistemas.com

# Configurar backend
cd backend
npm install --production
# Configurar .env con credenciales de producción

# Probar backend
npm test  # Si tienes tests

# Iniciar backend con PM2
pm2 start src/server.js --name "maxan-backend"
pm2 startup
pm2 save

# Configurar frontend para producción
cd ../frontend
npm install
npm run build

# Servir archivos estáticos con nginx (opcional)
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
```

### 4. Configurar nginx (Opcional)

```bash
sudo nano /etc/nginx/sites-available/maxan-sistemas
```

```nginx
server {
    listen 80;
    server_name maxansistemas.com www.maxansistemas.com;

    # Servir archivos estáticos del frontend
    root /var/www/html;
    index index.html;

    # API proxy
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # React Router fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/maxan-sistemas /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Configurar SSL con Let's Encrypt (Opcional)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d maxansistemas.com -d www.maxansistemas.com
```

### 6. Configurar firewall

```bash
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw allow 5000  # Para el backend si no usas nginx
```

## 📁 Estructura del Proyecto

```
maxanSistemas.com/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   └── ...
│   └── ...
├── backend/               # Express server
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── config/        # Database config
│   │   └── ...
│   └── ...
├── database/              # Database setup
│   ├── schema.sql         # Database schema
│   └── seed.sql           # Sample data
└── README.md
```

## 🔧 Scripts Disponibles

### Frontend
```bash
cd frontend
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
```

### Backend
```bash
cd backend
npm run dev      # Development server
npm start        # Production server
```

## 🧪 Testing

```bash
# Backend tests (si implementados)
cd backend
npm test

# Manual testing
curl http://localhost:5000/api/health
curl http://localhost:5000/api/products
```

## 🔒 Seguridad

- Validación de entrada en formularios
- Sanitización de datos
- Rate limiting en APIs
- Variables de entorno para credenciales
- HTTPS en producción

## 📞 Soporte

Para soporte técnico:
- Email: soporte@maxansistemas.com
- WhatsApp: +57 300 123 4567
- Sitio web: https://maxansistemas.com

## 📝 Licencia

Este proyecto es propiedad de Maxan Sistemas.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

Desarrollado con ❤️ por el equipo de Maxan Sistemas