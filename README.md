# Backend - Pagos Construcción 🏗️

API REST para gestionar pagos de trabajos de construcción con diferentes tipos de medición.

## 🚀 Tecnologías

- **Node.js** + **Express.js**
- **Prisma ORM** + **SQLite**
- **Winston** (Logging)
- **Morgan** (HTTP Logging)

## 📁 Estructura

```
backend/
├── config/
│   ├── database.js      # Configuración Prisma
│   └── logger.js        # Configuración Winston
├── controllers/
│   └── trabajoController.js  # Lógica de negocio
├── middlewares/
│   ├── errorHandler.js  # Manejo de errores
│   ├── requestLogger.js # Logging HTTP
│   └── validation.js    # Validaciones
├── routes/
│   ├── index.js         # Router principal
│   └── trabajos.js      # Rutas de trabajos
├── prisma/
│   └── schema.prisma    # Esquema de BD
└── server.js            # Servidor principal
```

## 🛠️ Instalación

```bash
npm install
npx prisma migrate dev --name init
npx prisma generate
```

## 🚀 Ejecución

```bash
# Desarrollo
npm run dev

# Producción
npm start
```

## 📊 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/trabajos` | Obtener todos los trabajos |
| POST | `/api/trabajos` | Crear nuevo trabajo |
| PUT | `/api/trabajos/:id` | Actualizar trabajo |
| PATCH | `/api/trabajos/:id/pagar` | Marcar como pagado |
| DELETE | `/api/trabajos/:id` | Eliminar trabajo |

## 📝 Logs

Los logs se guardan en `logs/`:
- `combined.log` - Todos los logs
- `error.log` - Solo errores

## 🗄️ Base de Datos

SQLite con esquema:
- **trabajos**: id, nombre, descripcion, tipoMedida, precioUnitario, cantidad, total, pagado, fechaCreacion, fechaPago

## 🔧 Variables de Entorno

```
PORT=3001
DATABASE_URL="file:./dev.db"
```