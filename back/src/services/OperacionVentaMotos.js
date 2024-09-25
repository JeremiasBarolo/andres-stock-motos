

        const { OperacionVentaMotosProvider } = require('../providers');

        const listAllOperacionVentaMotos = async () => {
            return await OperacionVentaMotosProvider.listAllOperacionVentaMotos();
        };

        const listOneOperacionVentaMotos = async (OperacionVentaMotos_id) => {
            return await OperacionVentaMotosProvider.listOneOperacionVentaMotos(OperacionVentaMotos_id);
        };

        const createOperacionVentaMotos = async (OperacionVentaMotosData) => {
            return await OperacionVentaMotosProvider.createOperacionVentaMotos(OperacionVentaMotosData);
        };


        const updateOperacionVentaMotos = async (OperacionVentaMotos_id, updateOperacionVentaMotos) => {
            return await OperacionVentaMotosProvider.updateOperacionVentaMotos(OperacionVentaMotos_id, updateOperacionVentaMotos);
        };

        const deleteOperacionVentaMotos = async (OperacionVentaMotos_id) => {
            return await OperacionVentaMotosProvider.deleteOperacionVentaMotos(OperacionVentaMotos_id);
        };


        module.exports = {
        listAllOperacionVentaMotos, listOneOperacionVentaMotos, createOperacionVentaMotos, updateOperacionVentaMotos, deleteOperacionVentaMotos, 
        };

