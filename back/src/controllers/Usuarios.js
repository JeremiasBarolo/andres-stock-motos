

const { UsuariosService } = require("../services");


const listAllUsuarios = async (req, res) => {
  try {
    const Usuarios = await UsuariosService.listAllUsuarios();
    res.json(Usuarios);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneUsuarios = async (req, res) => {
  try {
    const id = req.params.Usuarios_id;
    const Usuarios = await UsuariosService.listOneUsuarios(id);
    res.json(Usuarios);

  } catch (err) {
    res.status(500).json({ action: "listOneUsuarios", error: err.message });
  }

};

const createUsuarios = async (req, res) => {

  try {
    const newUsuarios = await UsuariosService.createUsuarios(req.body);

    res.json(newUsuarios);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create Usuarios.' });
  }
};

const updateUsuarios = async (req, res) => {

  try {
    const UsuariosUpdate = await UsuariosService.updateUsuarios(req.params.Usuarios_id, req.body);
    res.json(UsuariosUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateUsuarios', error: err.message });
  }
};

const updatePassword = async (req, res) => {

  try {
    const updatedPassword = await UsuariosService.updatePassword(req.params.Usuarios_id, req.body);
    res.json(updatedPassword);
  } catch (err) {
    res.status(500).json({ action: 'updateUsuarios', error: err.message });
  }
};

const deleteUsuarios = async (req, res) => {
  const id = req.params.Usuarios_id;
  try {
    await UsuariosService.deleteUsuarios(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteUsuarios', error: err.message });
  }
};



module.exports = {
  listAllUsuarios, 
  listOneUsuarios, 
  createUsuarios, 
  updateUsuarios, 
  deleteUsuarios, 
  updatePassword
};
