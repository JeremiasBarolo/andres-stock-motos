const OperacionVentaMotosService = require('../classes/operacionVentaMotos');
const operacionVentaMotosService = new OperacionVentaMotosService();

const listAllOperacionVentaMotos = async () => {
  return await operacionVentaMotosService.listAllOperacionVentaMotos();
};

const listOneOperacionVentaMotos = async (OperacionVentaMotos_id) => {
  return await operacionVentaMotosService.listOneOperacionVentaMotos(OperacionVentaMotos_id);
};

const createOperacionVentaMotos = async (OperacionVentaMotosData) => {
  return await operacionVentaMotosService.createOperacionVentaMotos(OperacionVentaMotosData);
};

const updateOperacionVentaMotos = async (OperacionVentaMotos_id, dataUpdated) => {
  return await operacionVentaMotosService.updateOperacionVentaMotos(OperacionVentaMotos_id, dataUpdated);
};

const deleteOperacionVentaMotos = async (OperacionVentaMotos_id) => {
  return await operacionVentaMotosService.deleteOperacionVentaMotos(OperacionVentaMotos_id);
};

module.exports = {
  listAllOperacionVentaMotos,
  listOneOperacionVentaMotos,
  createOperacionVentaMotos,
  updateOperacionVentaMotos,
  deleteOperacionVentaMotos,
};