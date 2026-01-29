const prisma = require('../config/database');
const logger = require('../config/logger');

const trabajoController = {
  // Obtener todos los trabajos
  getAll: async (req, res, next) => {
    try {
      logger.info('Obteniendo todos los trabajos');
      const trabajos = await prisma.trabajo.findMany({
        orderBy: { fechaCreacion: 'desc' }
      });
      logger.info(`Se encontraron ${trabajos.length} trabajos`);
      res.json(trabajos);
    } catch (error) {
      logger.error('Error al obtener trabajos:', error);
      next(error);
    }
  },

  // Crear nuevo trabajo
  create: async (req, res, next) => {
    try {
      const { nombre, descripcion, tipoMedida, precioUnitario, cantidad } = req.body;
      logger.info(`Creando nuevo trabajo: ${nombre}`);

      const total = precioUnitario * cantidad;

      const trabajo = await prisma.trabajo.create({
        data: {
          nombre,
          descripcion,
          tipoMedida,
          precioUnitario,
          cantidad,
          total
        }
      });

      logger.info(`Trabajo creado exitosamente - ID: ${trabajo.id}, Total: $${total}`);
      res.status(201).json(trabajo);
    } catch (error) {
      logger.error('Error al crear trabajo:', error);
      next(error);
    }
  },

  // Actualizar trabajo
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { nombre, descripcion, tipoMedida, precioUnitario, cantidad } = req.body;
      logger.info(`Actualizando trabajo ID: ${id}`);

      const total = precioUnitario * cantidad;

      const trabajo = await prisma.trabajo.update({
        where: { id: parseInt(id) },
        data: {
          nombre,
          descripcion,
          tipoMedida,
          precioUnitario,
          cantidad,
          total
        }
      });

      logger.info(`Trabajo actualizado exitosamente - ID: ${id}`);
      res.json(trabajo);
    } catch (error) {
      logger.error(`Error al actualizar trabajo ID: ${req.params.id}`, error);
      next(error);
    }
  },

  // Marcar como pagado
  markAsPaid: async (req, res, next) => {
    try {
      const { id } = req.params;
      logger.info(`Marcando trabajo como pagado - ID: ${id}`);

      const trabajo = await prisma.trabajo.update({
        where: { id: parseInt(id) },
        data: {
          pagado: true,
          fechaPago: new Date()
        }
      });

      logger.info(`Trabajo marcado como pagado - ID: ${id}, Total: $${trabajo.total}`);
      res.json(trabajo);
    } catch (error) {
      logger.error(`Error al marcar trabajo como pagado - ID: ${req.params.id}`, error);
      next(error);
    }
  },

  // Eliminar trabajo
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      logger.info(`Eliminando trabajo - ID: ${id}`);

      await prisma.trabajo.delete({
        where: { id: parseInt(id) }
      });

      logger.info(`Trabajo eliminado exitosamente - ID: ${id}`);
      res.json({ message: 'Trabajo eliminado correctamente' });
    } catch (error) {
      logger.error(`Error al eliminar trabajo - ID: ${req.params.id}`, error);
      next(error);
    }
  }
};

module.exports = trabajoController;