

        const { StockProvider } = require('../providers');

        const listAllStock = async () => {
            return await StockProvider.listAllStock();
        };

        const listAllRepuestos = async () => {
            return await StockProvider.listAllRepuestos();
        };

        const listOneStock = async (Stock_id) => {
            return await StockProvider.listOneStock(Stock_id);
        };

        const createStock = async (StockData) => {
            return await StockProvider.createStock(StockData);
        };


        const updateStock = async (Stock_id, updateStock) => {
            return await StockProvider.updateStock(Stock_id, updateStock);
        };

        const deleteStock = async (Stock_id) => {
            return await StockProvider.deleteStock(Stock_id);
        };


        module.exports = {
        listAllStock, listOneStock, createStock, updateStock, deleteStock, listAllRepuestos
        };

