const MovimientosService = require('../classes/movimientos');
const movimientosService = new MovimientosService();

const listHistorial = async () => {
  return await movimientosService.listHistorial();
};

const listPrecios = async () => {
  return await movimientosService.listPrecios();
};

const listAllRecaudacion = async () => {
  return await movimientosService.listAllRecaudacion();
};

const listAllVentasPorCategoria = async () => {
  return await movimientosService.listAllVentasPorCategoria();
};

const listAllMovimientos = async () => {
  return await movimientosService.listAllMovimientos();
};

const listAllServices = async () => {
  return await movimientosService.listAllServices();
};

const listAllVentasRepuestos = async () => {
  return await movimientosService.listAllVentasRepuestos();
};

const listAllVentasAccesesorios = async () => {
  return await movimientosService.listAllVentasAccesesorios();
};

const listAllMotosMovimientos = async () => {
  return await movimientosService.listAllMotosMovimientos();
};


const listOneMovimientos = async (Movimientos_id) => {
  return await movimientosService.listOneMovimientos(Movimientos_id);
};

const listAllRelaciones = async (Movimientos_id) => {
  return await movimientosService.listAllRelaciones(Movimientos_id);
};

const createMovimientos = async (MovimientosData) => {
  return await movimientosService.createMovimientos(MovimientosData);
};

const createVentaMoto = async (MovimientosData) => {
  return await movimientosService.createVentaMoto(MovimientosData);
};

const updateMovimientos = async (Movimientos_id, dataUpdated) => {
  return await movimientosService.updateMovimientos(Movimientos_id, dataUpdated);
};

const updateVentaMotos = async (Movimientos_id, dataUpdated) => {
  return await movimientosService.updateVentaMotos(Movimientos_id, dataUpdated);
};

const updateVentaRepuestos = async (Movimientos_id, dataUpdated) => {
  return await movimientosService.updateVentaRepuestos(Movimientos_id, dataUpdated);
};

const deleteMovimientos = async (Movimientos_id) => {
  return await movimientosService.deleteMovimientos(Movimientos_id);
};

const deleteVentaRespuestos = async (Movimientos_id) => {
  return await movimientosService.deleteVentaRespuestos(Movimientos_id);
};

module.exports = {
  listAllMovimientos,
  listOneMovimientos,
  createMovimientos,
  updateMovimientos,
  deleteMovimientos,
  updateVentaRepuestos,
  listAllMotosMovimientos,
  createVentaMoto,
  updateVentaMotos,
  listHistorial,
  deleteVentaRespuestos,
  listAllServices,
  listPrecios,
  listAllRelaciones,
  listAllRecaudacion,
  listAllVentasPorCategoria,
  listAllVentasRepuestos,
  listAllVentasAccesesorios
  
};