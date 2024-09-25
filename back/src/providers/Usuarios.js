const UsuariosService = require('../classes/usuarios');
const usuariosService = new UsuariosService();

const listAllUsuarios = async () => {
  return await usuariosService.listAllUsuarios();
};

const listOneUsuarios = async (Usuarios_id) => {
  return await usuariosService.listOneUsuarios(Usuarios_id);
};

const createUsuarios = async (UsuariosData) => {
  return await usuariosService.createUsuarios(UsuariosData);
};

const updateUsuarios = async (Usuarios_id, dataUpdated) => {
  return await usuariosService.updateUsuarios(Usuarios_id, dataUpdated);
};

const updatePassword = async (Usuarios_id, dataUpdated) => {
  return await usuariosService.updatePassword(Usuarios_id, dataUpdated);
};

const deleteUsuarios = async (Usuarios_id) => {
  return await usuariosService.deleteUsuarios(Usuarios_id);
};

module.exports = {
  listAllUsuarios,
  listOneUsuarios,
  createUsuarios,
  updateUsuarios,
  deleteUsuarios,
  updatePassword
};