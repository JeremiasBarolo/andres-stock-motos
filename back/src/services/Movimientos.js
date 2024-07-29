

        const { MovimientosProvider } = require('../providers');

        const listHistorial = async () => {
            return await MovimientosProvider.listHistorial();
        };

        const listAllRecaudacion = async () => {
            return await MovimientosProvider.listAllRecaudacion();
        };

        const listAllVentasPorCategoria = async () => {
            return await MovimientosProvider.listAllVentasPorCategoria();
        };

        const listPrecios = async () => {
            return await MovimientosProvider.listPrecios();
        };

        const listAllServices = async () => {
            return await MovimientosProvider.listAllServices();
        };

        const listAllMovimientos = async () => {
            return await MovimientosProvider.listAllMovimientos();
        };

        const listAllVentasRepuestos = async () => {
            return await MovimientosProvider.listAllVentasRepuestos();
        };

        const listAllVentasAccesesorios = async () => {
            return await MovimientosProvider.listAllVentasAccesesorios();
        };

        const listAllMotosMovimientos = async () => {
            return await MovimientosProvider.listAllMotosMovimientos();
        };

        const listOneMovimientos = async (Movimientos_id) => {
            return await MovimientosProvider.listOneMovimientos(Movimientos_id);
        };

        const listAllRelaciones = async (Movimientos_id) => {
            return await MovimientosProvider.listAllRelaciones(Movimientos_id);
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

        const deleteVentaRespuestos = async (Movimientos_id) => {
            return await MovimientosProvider.deleteVentaRespuestos(Movimientos_id);
        };


        module.exports = {
        listAllMovimientos, 
        listOneMovimientos, 
        createMovimientos, 
        updateMovimientos, 
        deleteMovimientos, 
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
        listAllVentasPorCategoria,
        listAllVentasRepuestos,
        listAllVentasAccesesorios
        };

