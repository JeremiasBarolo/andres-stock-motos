

        const { TipoMotoProvider } = require('../providers');

        const listAllTipoMoto = async () => {
            return await TipoMotoProvider.listAllTipoMoto();
        };

        const listOneTipoMoto = async (TipoMoto_id) => {
            return await TipoMotoProvider.listOneTipoMoto(TipoMoto_id);
        };

        const createTipoMoto = async (TipoMotoData) => {
            return await TipoMotoProvider.createTipoMoto(TipoMotoData);
        };


        const updateTipoMoto = async (TipoMoto_id, updateTipoMoto) => {
            return await TipoMotoProvider.updateTipoMoto(TipoMoto_id, updateTipoMoto);
        };

        const deleteTipoMoto = async (TipoMoto_id) => {
            return await TipoMotoProvider.deleteTipoMoto(TipoMoto_id);
        };


        module.exports = {
        listAllTipoMoto, listOneTipoMoto, createTipoMoto, updateTipoMoto, deleteTipoMoto, 
        };

