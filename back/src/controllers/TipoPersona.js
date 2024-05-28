

const { TipoPersonaService } = require("../services");


const listAllTipoPersona = async (req, res) => {
  try {
    const TipoPersona = await TipoPersonaService.listAllTipoPersona();
    res.json(TipoPersona);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneTipoPersona = async (req, res) => {
  try {
    const id = req.params.TipoPersona_id;
    const TipoPersona = await TipoPersonaService.listOneTipoPersona(id);
    res.json(TipoPersona);

  } catch (err) {
    res.status(500).json({ action: "listOneTipoPersona", error: err.message });
  }

};

const createTipoPersona = async (req, res) => {

  try {
    const newTipoPersona = await TipoPersonaService.createTipoPersona(req.body);

    res.json(newTipoPersona);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create TipoPersona.' });
  }
};

const updateTipoPersona = async (req, res) => {

  try {
    const TipoPersonaUpdate = await TipoPersonaService.updateTipoPersona(req.params.TipoPersona_id, req.body);
    res.json(TipoPersonaUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateTipoPersona', error: err.message });
  }
};

const deleteTipoPersona = async (req, res) => {
  const id = req.params.TipoPersona_id;
  try {
    await TipoPersonaService.deleteTipoPersona(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteTipoPersona', error: err.message });
  }
};



module.exports = {
  listAllTipoPersona, listOneTipoPersona, createTipoPersona, updateTipoPersona, deleteTipoPersona, 
};
