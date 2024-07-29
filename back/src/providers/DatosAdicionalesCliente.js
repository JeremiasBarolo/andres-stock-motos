const DatosAdicionalesCliente = require('../classes/datosAdicionalesCliente');
const datosAdicionalesCliente = new DatosAdicionalesCliente();

const listAllDatosAdicionalesCliente = async () => {
  return await datosAdicionalesCliente.listAllDatosAdicionalesCliente();
};

const listOneDatosAdicionalesCliente = async (DatosAdicionalesCliente_id) => {
  return await datosAdicionalesCliente.listOneDatosAdicionalesCliente(DatosAdicionalesCliente_id);
};

const createDatosAdicionalesCliente = async (DatosAdicionalesClienteData) => {
  return await datosAdicionalesCliente.createDatosAdicionalesCliente(DatosAdicionalesClienteData);
};

const updateDatosAdicionalesCliente = async (DatosAdicionalesCliente_id, dataUpdated) => {
  return await datosAdicionalesCliente.updateDatosAdicionalesCliente(DatosAdicionalesCliente_id, dataUpdated);
};

const deleteDatosAdicionalesCliente = async (DatosAdicionalesCliente_id) => {
  return await datosAdicionalesCliente.deleteDatosAdicionalesCliente(DatosAdicionalesCliente_id);
};

module.exports = {
  listAllDatosAdicionalesCliente,
  listOneDatosAdicionalesCliente,
  createDatosAdicionalesCliente,
  updateDatosAdicionalesCliente,
  deleteDatosAdicionalesCliente,
};