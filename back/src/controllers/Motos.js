

const { MotosService } = require("../services");


const listAllMotos = async (req, res) => {
  try {
    const Motos = await MotosService.listAllMotos();
    res.json(Motos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};



const listAllMotosUsadas = async (req, res) => {
  try {
    const Motos = await MotosService.listAllMotosUsadas();
    res.json(Motos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllMotosConsignacion = async (req, res) => {
  try {
    const Motos = await MotosService.listAllMotosConsignacion();
    res.json(Motos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllMotosNuevas = async (req, res) => {
  try {
    const Motos = await MotosService.listAllMotosNuevas();
    res.json(Motos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneMotos = async (req, res) => {
  try {
    const id = req.params.Motos_id;
    const Motos = await MotosService.listOneMotos(id);
    res.json(Motos);

  } catch (err) {
    res.status(500).json({ action: "listOneMotos", error: err.message });
  }

};

const createMotos = async (req, res) => {

  try {
    const newMotos = await MotosService.createMotos(req.body);

    res.json(newMotos);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create Motos.' });
  }
};

const updateMotos = async (req, res) => {

  try {
    const MotosUpdate = await MotosService.updateMotos(req.params.Motos_id, req.body);
    res.json(MotosUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateMotos', error: err.message });
  }
};

const deleteMotos = async (req, res) => {
  const id = req.params.Motos_id;
  try {
    await MotosService.deleteMotos(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteMotos', error: err.message });
  }
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
