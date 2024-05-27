

const { RolService } = require("../services");


const listAllRol = async (req, res) => {
  try {
    const Rol = await RolService.listAllRol();
    res.json(Rol);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneRol = async (req, res) => {
  try {
    const id = req.params.Rol_id;
    const Rol = await RolService.listOneRol(id);
    res.json(Rol);

  } catch (err) {
    res.status(500).json({ action: "listOneRol", error: err.message });
  }

};

const createRol = async (req, res) => {

  try {
    const newRol = await RolService.createRol(req.body);

    res.json(newRol);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create Rol.' });
  }
};

const updateRol = async (req, res) => {

  try {
    const RolUpdate = await RolService.updateRol(req.params.Rol_id, req.body);
    res.json(RolUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateRol', error: err.message });
  }
};

const deleteRol = async (req, res) => {
  const id = req.params.Rol_id;
  try {
    await RolService.deleteRol(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteRol', error: err.message });
  }
};



module.exports = {
  listAllRol, listOneRol, createRol, updateRol, deleteRol, 
};
