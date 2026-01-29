const morgan = require('morgan');
const logger = require('../config/logger');

// Stream personalizado para winston
const stream = {
  write: (message) => {
    logger.info(message.trim());
  }
};

// Formato personalizado de morgan
const requestLogger = morgan(
  ':method :url :status :res[content-length] - :response-time ms :remote-addr',
  { stream }
);

module.exports = requestLogger;