

        const { MovimientosProvider } = require('../providers');

        const listAllMovimientos = async () => {
            return await MovimientosProvider.listAllMovimientos();
        };

        const listOneMovimientos = async (Movimientos_id) => {
            return await MovimientosProvider.listOneMovimientos(Movimientos_id);
        };

        const createMovimientos = async (MovimientosData) => {
            return await MovimientosProvider.createMovimientos(MovimientosData);
        };


        const updateMovimientos = async (Movimientos_id, updateMovimientos) => {
            return await MovimientosProvider.updateMovimientos(Movimientos_id, updateMovimientos);
        };

        const deleteMovimientos = async (Movimientos_id) => {
            return await MovimientosProvider.deleteMovimientos(Movimientos_id);
        };


        module.exports = {
        listAllMovimientos, listOneMovimientos, createMovimientos, updateMovimientos, deleteMovimientos, 
        };

