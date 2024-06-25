

const { MovimientosService } = require("../services");



const listAllMovimientos = async (req, res) => {
  try {
    const Movimientos = await MovimientosService.listAllMovimientos();
    res.json(Movimientos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllVentas = async (req, res) => {
  try {
    const Movimientos = await MovimientosService.listAllVentas();
    res.json(Movimientos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllMotosMovimientos = async (req, res) => {
  try {
    const Movimientos = await MovimientosService.listAllMotosMovimientos();
    res.json(Movimientos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneMovimientos = async (req, res) => {
  try {
    const id = req.params.Movimientos_id;
    const Movimientos = await MovimientosService.listOneMovimientos(id);
    res.json(Movimientos);

  } catch (err) {
    res.status(500).json({ action: "listOneMovimientos", error: err.message });
  }

};

const createMovimientos = async (req, res) => {

  try {
    const newMovimientos = await MovimientosService.createMovimientos(req.body);

    res.json(newMovimientos);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create Movimientos.' });
  }
};


const createVentaMoto = async (req, res) => {

  try {
    const newMovimientos = await MovimientosService.createVentaMoto(req.body);

    res.json(newMovimientos);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create Movimientos.' });
  }
};

const updateVentaMotos = async (req, res) => {

  try {
    const MovimientosUpdate = await MovimientosService.updateVentaMotos(req.params.Movimientos_id, req.body);
    res.json(MovimientosUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateMovimientos', error: err.message });
  }
};

const updateMovimientos = async (req, res) => {

  try {
    const MovimientosUpdate = await MovimientosService.updateMovimientos(req.params.Movimientos_id, req.body);
    res.json(MovimientosUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateMovimientos', error: err.message });
  }
};

const updateVentaRepuestos = async (req, res) => {

  try {
    const MovimientosUpdate = await MovimientosService.updateVentaRepuestos(req.params.Movimientos_id, req.body);
    res.json(MovimientosUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateMovimientos', error: err.message });
  }
};

const deleteMovimientos = async (req, res) => {
  const id = req.params.Movimientos_id;
  try {
    await MovimientosService.deleteMovimientos(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteMovimientos', error: err.message });
  }
};



module.exports = {
  listAllMovimientos, 
  listOneMovimientos, 
  createMovimientos, 
  updateMovimientos, 
  deleteMovimientos, 
  listAllVentas,
  updateVentaRepuestos,
  listAllMotosMovimientos,
  createVentaMoto,
  updateVentaMotos
};
