const PersonasService = require('../classes/personas');
const personasService = new PersonasService();

const listAllPersonas = async () => {
  return await personasService.listAllPersonas();
};

const listAllEmpleados= async () => {
  return await personasService.listAllEmpleados();
};

const listAllProveedores= async () => {
  return await personasService.listAllProveedores();
};

const listAllClientes= async () => {
  return await personasService.listAllClientes();
};

const listOnePersonas = async (Personas_id) => {
  return await personasService.listOnePersonas(Personas_id);
};

const createPersonas = async (PersonasData) => {
  return await personasService.createPersonas(PersonasData);
};

const updatePersonas = async (Personas_id, dataUpdated) => {
  return await personasService.updatePersonas(Personas_id, dataUpdated);
};

const deletePersonas = async (Personas_id) => {
  return await personasService.deletePersonas(Personas_id);
};

module.exports = {
  listAllPersonas,
  listOnePersonas,
  createPersonas,
  updatePersonas,
  deletePersonas,
  listAllEmpleados,
  listAllProveedores,
  listAllClientes
};