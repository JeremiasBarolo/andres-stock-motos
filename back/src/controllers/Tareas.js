

const { TareasService } = require("../services");


const listAllTareas = async (req, res) => {
  try {
    const Tareas = await TareasService.listAllTareas();
    res.json(Tareas);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneTareas = async (req, res) => {
  try {
    const id = req.params.Tareas_id;
    const Tareas = await TareasService.listOneTareas(id);
    res.json(Tareas);

  } catch (err) {
    res.status(500).json({ action: "listOneTareas", error: err.message });
  }

};

const listTareasEmpleado = async (req, res) => {
  try {
    const id = req.params.Tareas_id;
    const Tareas = await TareasService.listTareasEmpleado(id);
    res.json(Tareas);

  } catch (err) {
    res.status(500).json({ action: "listOneTareas", error: err.message });
  }

};

const countHome = async (req, res) => {
  try {
    const Tareas = await TareasService.countHome();
    res.json(Tareas);

  } catch (err) {
    res.status(500).json({ action: "listOneTareas", error: err.message });
  }

};

const createTareas = async (req, res) => {

  try {
    const newTareas = await TareasService.createTareas(req.body);

    res.json(newTareas);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create Tareas.' });
  }
};

const updateTareas = async (req, res) => {

  try {
    const TareasUpdate = await TareasService.updateTareas(req.params.Tareas_id, req.body);
    res.json(TareasUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateTareas', error: err.message });
  }
};

const deleteTareas = async (req, res) => {
  const id = req.params.Tareas_id;
  try {
    await TareasService.deleteTareas(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteTareas', error: err.message });
  }
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
