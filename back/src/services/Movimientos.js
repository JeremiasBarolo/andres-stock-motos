

        const { MovimientosProvider } = require('../providers');

        const listHistorial = async () => {
            return await MovimientosProvider.listHistorial();
        };

        const listAllMovimientos = async () => {
            return await MovimientosProvider.listAllMovimientos();
        };

        const listAllVentas = async () => {
            return await MovimientosProvider.listAllVentas();
        };

        const listAllMotosMovimientos = async () => {
            return await MovimientosProvider.listAllMotosMovimientos();
        };

        const listOneMovimientos = async (Movimientos_id) => {
            return await MovimientosProvider.listOneMovimientos(Movimientos_id);
        };

        const createMovimientos = async (MovimientosData) => {
            return await MovimientosProvider.createMovimientos(MovimientosData);
        };

        const createVentaMoto = async (MovimientosData) => {
            return await MovimientosProvider.createVentaMoto(MovimientosData);
        };

        const updateVentaMotos = async (Movimientos_id, updateMovimientos) => {
            return await MovimientosProvider.updateVentaMotos(Movimientos_id, updateMovimientos);
        };
        const updateMovimientos = async (Movimientos_id, updateMovimientos) => {
            return await MovimientosProvider.updateMovimientos(Movimientos_id, updateMovimientos);
        };

        const updateVentaRepuestos = async (Movimientos_id, updateMovimientos) => {
            return await MovimientosProvider.updateVentaRepuestos(Movimientos_id, updateMovimientos);
        };

        const deleteMovimientos = async (Movimientos_id) => {
            return await MovimientosProvider.deleteMovimientos(Movimientos_id);
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
        updateVentaMotos,
        listHistorial    
        };

