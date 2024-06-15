const MovimientosService = require('../classes/movimientos');
const movimientosService = new MovimientosService();

const listAllMovimientos = async () => {
  return await movimientosService.listAllMovimientos();
};

const listAllVentas = async () => {
  return await movimientosService.listAllVentas();
};

const listOneMovimientos = async (Movimientos_id) => {
  return await movimientosService.listOneMovimientos(Movimientos_id);
};

const createMovimientos = async (MovimientosData) => {
  return await movimientosService.createMovimientos(MovimientosData);
};

const updateMovimientos = async (Movimientos_id, dataUpdated) => {
  return await movimientosService.updateMovimientos(Movimientos_id, dataUpdated);
};

const deleteMovimientos = async (Movimientos_id) => {
  return await movimientosService.deleteMovimientos(Movimientos_id);
};

module.exports = {
  listAllMovimientos,
  listOneMovimientos,
  createMovimientos,
  updateMovimientos,
  deleteMovimientos,
  listAllVentas
};