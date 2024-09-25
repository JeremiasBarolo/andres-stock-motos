const TareasService = require('../classes/tareas');
const tareasService = new TareasService();

const listAllTareas = async () => {
  return await tareasService.listAllTareas();
};

const listTareasEmpleado = async (usuarioId) => {
  return await tareasService.listTareasEmpleado(usuarioId);
};

const listOneTareas = async (Tareas_id) => {
  return await tareasService.listOneTareas(Tareas_id);
};

const countHome = async () => {
  return await tareasService.countHome();
};

const createTareas = async (TareasData) => {
  return await tareasService.createTareas(TareasData);
};

const updateTareas = async (Tareas_id, dataUpdated) => {
  return await tareasService.updateTareas(Tareas_id, dataUpdated);
};

const deleteTareas = async (Tareas_id) => {
  return await tareasService.deleteTareas(Tareas_id);
};

module.exports = {
  listAllTareas,
  listOneTareas,
  createTareas,
  updateTareas,
  deleteTareas,
  listTareasEmpleado,
  countHome
};