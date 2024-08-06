

const { OperacionVentaMotosService } = require("../services");


const listAllOperacionVentaMotos = async (req, res) => {
  try {
    const OperacionVentaMotos = await OperacionVentaMotosService.listAllOperacionVentaMotos();
    res.json(OperacionVentaMotos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneOperacionVentaMotos = async (req, res) => {
  try {
    const id = req.params.OperacionVentaMotos_id;
    const OperacionVentaMotos = await OperacionVentaMotosService.listOneOperacionVentaMotos(id);
    res.json(OperacionVentaMotos);

  } catch (err) {
    res.status(500).json({ action: "listOneOperacionVentaMotos", error: err.message });
  }

};

const createOperacionVentaMotos = async (req, res) => {

  try {
    const newOperacionVentaMotos = await OperacionVentaMotosService.createOperacionVentaMotos(req.body);

    res.json(newOperacionVentaMotos);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create OperacionVentaMotos.' });
  }
};

const updateOperacionVentaMotos = async (req, res) => {

  try {
    const OperacionVentaMotosUpdate = await OperacionVentaMotosService.updateOperacionVentaMotos(req.params.OperacionVentaMotos_id, req.body);
    res.json(OperacionVentaMotosUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateOperacionVentaMotos', error: err.message });
  }
};

const deleteOperacionVentaMotos = async (req, res) => {
  const id = req.params.OperacionVentaMotos_id;
  try {
    await OperacionVentaMotosService.deleteOperacionVentaMotos(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteOperacionVentaMotos', error: err.message });
  }
};



module.exports = {
  listAllOperacionVentaMotos, listOneOperacionVentaMotos, createOperacionVentaMotos, updateOperacionVentaMotos, deleteOperacionVentaMotos, 
};
