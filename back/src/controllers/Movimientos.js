

const { MovimientosService } = require("../services");



const listAllMovimientos = async (req, res) => {
  try {
    const Movimientos = await MovimientosService.listAllMovimientos();
    res.json(Movimientos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllRecaudacion = async (req, res) => {
  try {
    const Movimientos = await MovimientosService.listAllRecaudacion();
    res.json(Movimientos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllVentasPorCategoria = async (req, res) => {
  try {
    const Movimientos = await MovimientosService.listAllVentasPorCategoria();
    res.json(Movimientos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllRelaciones = async (req, res) => {
  try {
    const id = req.params.Movimientos_id;
    const Movimientos = await MovimientosService.listAllRelaciones(id);
    res.json(Movimientos);

  } catch (err) {
    res.status(500).json({ action: "listOneMovimientos", error: err.message });
  }
};

const listHistorial = async (req, res) => {
  try {
    const Movimientos = await MovimientosService.listHistorial();
    res.json(Movimientos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listPrecios = async (req, res) => {
  try {
    const Movimientos = await MovimientosService.listPrecios();
    res.json(Movimientos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllServices = async (req, res) => {
  try {
    const Movimientos = await MovimientosService.listAllServices();
    res.json(Movimientos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllVentasRepuestos = async (req, res) => {
  try {
    const Movimientos = await MovimientosService.listAllVentasRepuestos();
    res.json(Movimientos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllVentasAccesesorios = async (req, res) => {
  try {
    const Movimientos = await MovimientosService.listAllVentasAccesesorios();
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

const deleteVentaRespuestos = async (req, res) => {
  const id = req.params.Movimientos_id;
  try {
    await MovimientosService.deleteVentaRespuestos(id);
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
  listAllVentasRepuestos,
  listAllVentasAccesesorios,
  updateVentaRepuestos,
  listAllMotosMovimientos,
  createVentaMoto,
  updateVentaMotos,
  listHistorial,
  deleteVentaRespuestos,
  listAllServices,
  listPrecios,
  listAllRelaciones,
  listAllRecaudacion,
  listAllVentasPorCategoria
};
