

        const { TipoMovimientosProvider } = require('../providers');

        const listAllTipoMovimientos = async () => {
            return await TipoMovimientosProvider.listAllTipoMovimientos();
        };

        const listOneTipoMovimientos = async (TipoMovimientos_id) => {
            return await TipoMovimientosProvider.listOneTipoMovimientos(TipoMovimientos_id);
        };

        const createTipoMovimientos = async (TipoMovimientosData) => {
            return await TipoMovimientosProvider.createTipoMovimientos(TipoMovimientosData);
        };


        const updateTipoMovimientos = async (TipoMovimientos_id, updateTipoMovimientos) => {
            return await TipoMovimientosProvider.updateTipoMovimientos(TipoMovimientos_id, updateTipoMovimientos);
        };

        const deleteTipoMovimientos = async (TipoMovimientos_id) => {
            return await TipoMovimientosProvider.deleteTipoMovimientos(TipoMovimientos_id);
        };


        module.exports = {
        listAllTipoMovimientos, listOneTipoMovimientos, createTipoMovimientos, updateTipoMovimientos, deleteTipoMovimientos, 
        };

