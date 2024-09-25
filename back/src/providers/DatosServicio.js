const DatosServicioService = require('../classes/datosServicio');
const datosServicioService = new DatosServicioService();

const listAllDatosServicio = async () => {
  return await datosServicioService.listAllDatosServicio();
};

const listOneDatosServicio = async (DatosServicio_id) => {
  return await datosServicioService.listOneDatosServicio(DatosServicio_id);
};

const createDatosServicio = async (DatosServicioData) => {
  return await datosServicioService.createDatosServicio(DatosServicioData);
};

const updateDatosServicio = async (DatosServicio_id, dataUpdated) => {
  return await datosServicioService.updateDatosServicio(DatosServicio_id, dataUpdated);
};

const updateInsumos = async (DatosServicio_id, dataUpdated) => {
  return await datosServicioService.updateInsumos(DatosServicio_id, dataUpdated);
};

const deleteDatosServicio = async (DatosServicio_id) => {
  return await datosServicioService.deleteDatosServicio(DatosServicio_id);
};

module.exports = {
  listAllDatosServicio,
  listOneDatosServicio,
  createDatosServicio,
  updateDatosServicio,
  deleteDatosServicio,
  updateInsumos
};