

const { StockService } = require("../services");



const listAllStock = async (req, res) => {
  try {
    const Stock = await StockService.listAllStock();
    res.json(Stock);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllVentasAccesesorios = async (req, res) => {
  try {
    const Stock = await StockService.listAllVentasAccesesorios();
    res.json(Stock);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllVentasRepuestos = async (req, res) => {
  try {
    const Stock = await StockService.listAllVentasRepuestos();
    res.json(Stock);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllDisponible = async (req, res) => {
  try {
    const Stock = await StockService.listAllDisponible();
    res.json(Stock);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllInsumos = async (req, res) => {
  try {
    const Stock = await StockService.listAllInsumos();
    res.json(Stock);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllRepuestos = async (req, res) => {
  try {
    const Stock = await StockService.listAllRepuestos();
    res.json(Stock);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllStockGeneral = async (req, res) => {
  try {
    const Stock = await StockService.listAllStockGeneral();
    res.json(Stock);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllServicios = async (req, res) => {
  try {
    const Stock = await StockService.listAllServicios();
    res.json(Stock);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOneStock = async (req, res) => {
  try {
    const id = req.params.Stock_id;
    const Stock = await StockService.listOneStock(id);
    res.json(Stock);

  } catch (err) {
    res.status(500).json({ action: "listOneStock", error: err.message });
  }

};

const createStock = async (req, res) => {

  try {
    const newStock = await StockService.createStock(req.body);

    res.json(newStock);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create Stock.' });
  }
};

const updateStock = async (req, res) => {

  try {
    const StockUpdate = await StockService.updateStock(req.params.Stock_id, req.body);
    res.json(StockUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updateStock', error: err.message });
  }
};

const deleteStock = async (req, res) => {
  const id = req.params.Stock_id;
  try {
    await StockService.deleteStock(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deleteStock', error: err.message });
  }
};



module.exports = {
  listAllStock, 
  listOneStock, 
  createStock, 
  updateStock, 
  deleteStock, 
  listAllRepuestos, 
  listAllServicios, 
  listAllInsumos,
  listAllDisponible,
  listAllVentasRepuestos,
  listAllVentasAccesesorios,
  listAllStockGeneral


};
