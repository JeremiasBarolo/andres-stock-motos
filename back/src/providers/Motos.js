const MotosService = require('../classes/motos');
const motosService = new MotosService();

const listAllMotos = async () => {
  return await motosService.listAllMotos();
};

const listAllMotosUsadas = async () => {
  return await motosService.listAllMotosUsadas();
};

const listAllMotosConsignacion = async () => {
  return await motosService.listAllMotosConsignacion();
};

const listAllMotosNuevas = async () => {
  return await motosService.listAllMotosNuevas();
};

const listOneMotos = async (Motos_id) => {
  return await motosService.listOneMotos(Motos_id);
};

const createMotos = async (MotosData) => {
  return await motosService.createMotos(MotosData);
};

const updateMotos = async (Motos_id, dataUpdated) => {
  return await motosService.updateMotos(Motos_id, dataUpdated);
};

const deleteMotos = async (Motos_id) => {
  return await motosService.deleteMotos(Motos_id);
};

module.exports = {
  listAllMotos,
  listOneMotos,
  createMotos,
  updateMotos,
  deleteMotos,
  listAllMotosUsadas,
  listAllMotosNuevas,
  listAllMotosConsignacion
};