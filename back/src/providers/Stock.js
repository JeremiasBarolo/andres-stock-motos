const stockService = require('../classes/stock');
const StockService = new stockService();

const listAllStock = async () => {
  return await StockService.listAllStock();
};

const listAllRepuestos = async () => {
  return await StockService.listAllRepuestos();
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
  listAllServicios
};