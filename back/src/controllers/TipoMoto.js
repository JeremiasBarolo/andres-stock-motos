

const { TipoMotoService } = require("../services");


const listAllTipoMoto = async (req, res) => {
  try {
    const TipoMoto = await TipoMotoService.listAllTipoMoto();
    res.json(TipoMoto);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneTipoMoto = async (req, res) => {
  try {
    const id = req.params.TipoMoto_id;
    const TipoMoto = await TipoMotoService.listOneTipoMoto(id);
    res.json(TipoMoto);

  } catch (err) {
    res.status(500).json({ action: "listOneTipoMoto", error: err.message });
  }

};

const createTipoMoto = async (req, res) => {

  try {
    const newTipoMoto = await TipoMotoService.createTipoMoto(req.body);

    res.json(newTipoMoto);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create TipoMoto.' });
  }
};

const updateTipoMoto = async (req, res) => {

  try {
    const TipoMotoUpdate = await TipoMotoService.updateTipoMoto(req.params.TipoMoto_id, req.body);
    res.json(TipoMotoUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateTipoMoto', error: err.message });
  }
};

const deleteTipoMoto = async (req, res) => {
  const id = req.params.TipoMoto_id;
  try {
    await TipoMotoService.deleteTipoMoto(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteTipoMoto', error: err.message });
  }
};



module.exports = {
  listAllTipoMoto, listOneTipoMoto, createTipoMoto, updateTipoMoto, deleteTipoMoto, 
};
