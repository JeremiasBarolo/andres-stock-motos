

        const { StockProvider } = require('../providers');

        const listAllStock = async () => {
            return await StockProvider.listAllStock();
        };

        const listAllStockGeneral = async () => {
            return await StockProvider.listAllStockGeneral();
        };

        const listAllVentasAccesesorios = async () => {
            return await StockProvider.listAllVentasAccesesorios();
        };
        const listAllVentasRepuestos = async () => {
            return await StockProvider.listAllVentasRepuestos();
        };

        const listAllDisponible = async () => {
            return await StockProvider.listAllDisponible();
        };

        const listAllInsumos = async () => {
            return await StockProvider.listAllInsumos();
        };

        const listAllRepuestos = async () => {
            return await StockProvider.listAllRepuestos();
        };

        const listAllStockVentaGeneral = async () => {
            return await StockProvider.listAllStockVentaGeneral();
        };

        const listAllServicios = async () => {
            return await StockProvider.listAllServicios();
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

