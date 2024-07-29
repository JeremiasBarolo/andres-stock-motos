const stockService = require('../classes/stock');
const StockService = new stockService();

const listAllStock = async () => {
  return await StockService.listAllStock();
};

const listAllStockGeneral = async () => {
  return await StockService.listAllStockGeneral();
};

const listAllVentasAccesesorios = async () => {
  return await StockService.listAllVentasAccesesorios();
};

const listAllVentasRepuestos = async () => {
  return await StockService.listAllVentasRepuestos();
};

const listAllDisponible = async () => {
  return await StockService.listAllStockCount();
};

const listAllInsumos = async () => {
  return await StockService.listAllInsumos();
};

const listAllRepuestos = async () => {
  return await StockService.listAllRepuestos();
};

const listAllStockVentaGeneral = async () => {
  return await StockService.listAllStockVentaGeneral();
};

const listAllServicios = async () => {
  return await StockService.listAllServicios();
};

const listOneStock = async (Stock_id) => {
  return await StockService.listOneStock(Stock_id);
};

const createStock = async (StockData) => {
  return await StockService.createStock(StockData);
};

const updateStock = async (Stock_id, dataUpdated) => {
  return await StockService.updateStock(Stock_id, dataUpdated);
};

const deleteStock = async (Stock_id) => {
  return await StockService.deleteStock(Stock_id);
};

module.exports = {
  listAllStock,
  listOneStock,
  createStock,
  updateStock,
  deleteStock,
  listAllRepuestos,
  listAllServicios,
  listAllStockVentaGeneral,
  listAllInsumos,
  listAllDisponible,
  listAllVentasAccesesorios,
  listAllVentasRepuestos,
  listAllStockGeneral
};