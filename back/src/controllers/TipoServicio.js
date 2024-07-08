

const { TipoServicioService } = require("../services");


const listAllTipoServicio = async (req, res) => {
  try {
    const TipoServicio = await TipoServicioService.listAllTipoServicio();
    res.json(TipoServicio);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneTipoServicio = async (req, res) => {
  try {
    const id = req.params.TipoServicio_id;
    const TipoServicio = await TipoServicioService.listOneTipoServicio(id);
    res.json(TipoServicio);

  } catch (err) {
    res.status(500).json({ action: "listOneTipoServicio", error: err.message });
  }

};




module.exports = {
  listAllTipoServicio, listOneTipoServicio
};
