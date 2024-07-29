

const { DatosAdicionalesClienteService } = require("../services");


const listAllDatosAdicionalesCliente = async (req, res) => {
  try {
    const DatosAdicionalesCliente = await DatosAdicionalesClienteService.listAllDatosAdicionalesCliente();
    res.json(DatosAdicionalesCliente);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneDatosAdicionalesCliente = async (req, res) => {
  try {
    const id = req.params.DatosAdicionalesCliente_id;
    const DatosAdicionalesCliente = await DatosAdicionalesClienteService.listOneDatosAdicionalesCliente(id);
    res.json(DatosAdicionalesCliente);

  } catch (err) {
    res.status(500).json({ action: "listOneDatosAdicionalesCliente", error: err.message });
  }

};

const createDatosAdicionalesCliente = async (req, res) => {

  try {
    const newDatosAdicionalesCliente = await DatosAdicionalesClienteService.createDatosAdicionalesCliente(req.body);

    res.json(newDatosAdicionalesCliente);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create DatosAdicionalesCliente.' });
  }
};

const updateDatosAdicionalesCliente = async (req, res) => {

  try {
    const DatosAdicionalesClienteUpdate = await DatosAdicionalesClienteService.updateDatosAdicionalesCliente(req.params.DatosAdicionalesCliente_id, req.body);
    res.json(DatosAdicionalesClienteUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateDatosAdicionalesCliente', error: err.message });
  }
};

const deleteDatosAdicionalesCliente = async (req, res) => {
  const id = req.params.DatosAdicionalesCliente_id;
  try {
    await DatosAdicionalesClienteService.deleteDatosAdicionalesCliente(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteDatosAdicionalesCliente', error: err.message });
  }
};



module.exports = {
  listAllDatosAdicionalesCliente, listOneDatosAdicionalesCliente, createDatosAdicionalesCliente, updateDatosAdicionalesCliente, deleteDatosAdicionalesCliente, 
};
