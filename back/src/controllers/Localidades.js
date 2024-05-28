

const { LocalidadesService } = require("../services");


const listAllLocalidades = async (req, res) => {
  try {
    const Localidades = await LocalidadesService.listAllLocalidades();
    res.json(Localidades);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneLocalidades = async (req, res) => {
  try {
    const id = req.params.Localidades_id;
    const Localidades = await LocalidadesService.listOneLocalidades(id);
    res.json(Localidades);

  } catch (err) {
    res.status(500).json({ action: "listOneLocalidades", error: err.message });
  }

};

const createLocalidades = async (req, res) => {

  try {
    const newLocalidades = await LocalidadesService.createLocalidades(req.body);

    res.json(newLocalidades);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create Localidades.' });
  }
};

const updateLocalidades = async (req, res) => {

  try {
    const LocalidadesUpdate = await LocalidadesService.updateLocalidades(req.params.Localidades_id, req.body);
    res.json(LocalidadesUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateLocalidades', error: err.message });
  }
};

const deleteLocalidades = async (req, res) => {
  const id = req.params.Localidades_id;
  try {
    await LocalidadesService.deleteLocalidades(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteLocalidades', error: err.message });
  }
};



module.exports = {
  listAllLocalidades, listOneLocalidades, createLocalidades, updateLocalidades, deleteLocalidades, 
};
