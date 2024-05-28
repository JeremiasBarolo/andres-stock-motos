

const { MarcaService } = require("../services");


const listAllMarca = async (req, res) => {
  try {
    const Marca = await MarcaService.listAllMarca();
    res.json(Marca);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneMarca = async (req, res) => {
  try {
    const id = req.params.Marca_id;
    const Marca = await MarcaService.listOneMarca(id);
    res.json(Marca);

  } catch (err) {
    res.status(500).json({ action: "listOneMarca", error: err.message });
  }

};

const createMarca = async (req, res) => {

  try {
    const newMarca = await MarcaService.createMarca(req.body);

    res.json(newMarca);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create Marca.' });
  }
};

const updateMarca = async (req, res) => {

  try {
    const MarcaUpdate = await MarcaService.updateMarca(req.params.Marca_id, req.body);
    res.json(MarcaUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateMarca', error: err.message });
  }
};

const deleteMarca = async (req, res) => {
  const id = req.params.Marca_id;
  try {
    await MarcaService.deleteMarca(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteMarca', error: err.message });
  }
};



module.exports = {
  listAllMarca, listOneMarca, createMarca, updateMarca, deleteMarca, 
};
