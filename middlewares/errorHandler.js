const errorHandler = (err, req, res, next) => {
  const logger = require('../config/logger');
  
  logger.error({
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
    timestamp: new Date().toISOString()
  });
  
  res.status(500).json({ 
    error: 'Error interno del servidor',
    message: err.message 
  });
};

module.exports = errorHandler;