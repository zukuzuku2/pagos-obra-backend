const validateTrabajo = (req, res, next) => {
  const { nombre, tipoMedida, precioUnitario, cantidad } = req.body;
  
  if (!nombre || !tipoMedida || !precioUnitario || !cantidad) {
    return res.status(400).json({ 
      error: 'Campos requeridos: nombre, tipoMedida, precioUnitario, cantidad' 
    });
  }
  
  if (precioUnitario <= 0 || cantidad <= 0) {
    return res.status(400).json({ 
      error: 'Precio y cantidad deben ser mayores a 0' 
    });
  }
  
  const tiposValidos = ['metros_cuadrados', 'metros_lineales', 'unidad'];
  if (!tiposValidos.includes(tipoMedida)) {
    return res.status(400).json({ 
      error: 'Tipo de medida inválido' 
    });
  }
  
  next();
};

module.exports = { validateTrabajo };