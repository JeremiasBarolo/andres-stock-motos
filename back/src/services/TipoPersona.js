

        const { TipoPersonaProvider } = require('../providers');

        const listAllTipoPersona = async () => {
            return await TipoPersonaProvider.listAllTipoPersona();
        };

        const listOneTipoPersona = async (TipoPersona_id) => {
            return await TipoPersonaProvider.listOneTipoPersona(TipoPersona_id);
        };

        const createTipoPersona = async (TipoPersonaData) => {
            return await TipoPersonaProvider.createTipoPersona(TipoPersonaData);
        };


        const updateTipoPersona = async (TipoPersona_id, updateTipoPersona) => {
            return await TipoPersonaProvider.updateTipoPersona(TipoPersona_id, updateTipoPersona);
        };

        const deleteTipoPersona = async (TipoPersona_id) => {
            return await TipoPersonaProvider.deleteTipoPersona(TipoPersona_id);
        };


        module.exports = {
        listAllTipoPersona, listOneTipoPersona, createTipoPersona, updateTipoPersona, deleteTipoPersona, 
        };

