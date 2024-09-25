

const { DatosServicioService } = require("../services");


const listAllDatosServicio = async (req, res) => {
  try {
    const DatosServicio = await DatosServicioService.listAllDatosServicio();
    res.json(DatosServicio);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneDatosServicio = async (req, res) => {
  try {
    const id = req.params.DatosServicio_id;
    const DatosServicio = await DatosServicioService.listOneDatosServicio(id);
    res.json(DatosServicio);

  } catch (err) {
    res.status(500).json({ action: "listOneDatosServicio", error: err.message });
  }

};

const createDatosServicio = async (req, res) => {

  try {
    const newDatosServicio = await DatosServicioService.createDatosServicio(req.body);

    res.json(newDatosServicio);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create DatosServicio.' });
  }
};

const updateInsumos = async (req, res) => {

  try {
    const DatosServicioUpdate = await DatosServicioService.updateInsumos(req.params.DatosServicio_id, req.body);
    res.json(DatosServicioUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateDatosServicio', error: err.message });
  }
};

const updateDatosServicio = async (req, res) => {

  try {
    const DatosServicioUpdate = await DatosServicioService.updateDatosServicio(req.params.DatosServicio_id, req.body);
    res.json(DatosServicioUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateDatosServicio', error: err.message });
  }
};

const deleteDatosServicio = async (req, res) => {
  const id = req.params.DatosServicio_id;
  try {
    await DatosServicioService.deleteDatosServicio(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteDatosServicio', error: err.message });
  }
};



module.exports = {
  listAllDatosServicio, 
  listOneDatosServicio, 
  createDatosServicio, 
  updateDatosServicio, 
  deleteDatosServicio, 
  updateInsumos,
};
