const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const requestLogger = require('./middlewares/requestLogger');
const logger = require('./config/logger');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(requestLogger);

// Rutas
app.use('/api', routes);

// Middleware de manejo de errores
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Servidor iniciado en http://localhost:${PORT}`);
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});