

const { TipoMovimientosService } = require("../services");


const listAllTipoMovimientos = async (req, res) => {
  try {
    const TipoMovimientos = await TipoMovimientosService.listAllTipoMovimientos();
    res.json(TipoMovimientos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneTipoMovimientos = async (req, res) => {
  try {
    const id = req.params.TipoMovimientos_id;
    const TipoMovimientos = await TipoMovimientosService.listOneTipoMovimientos(id);
    res.json(TipoMovimientos);

  } catch (err) {
    res.status(500).json({ action: "listOneTipoMovimientos", error: err.message });
  }

};

const createTipoMovimientos = async (req, res) => {

  try {
    const newTipoMovimientos = await TipoMovimientosService.createTipoMovimientos(req.body);

    res.json(newTipoMovimientos);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create TipoMovimientos.' });
  }
};

const updateTipoMovimientos = async (req, res) => {

  try {
    const TipoMovimientosUpdate = await TipoMovimientosService.updateTipoMovimientos(req.params.TipoMovimientos_id, req.body);
    res.json(TipoMovimientosUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateTipoMovimientos', error: err.message });
  }
};

const deleteTipoMovimientos = async (req, res) => {
  const id = req.params.TipoMovimientos_id;
  try {
    await TipoMovimientosService.deleteTipoMovimientos(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteTipoMovimientos', error: err.message });
  }
};



module.exports = {
  listAllTipoMovimientos, listOneTipoMovimientos, createTipoMovimientos, updateTipoMovimientos, deleteTipoMovimientos, 
};
