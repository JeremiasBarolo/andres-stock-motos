

        const { TipoServicioProvider } = require('../providers');

        const listAllTipoServicio = async () => {
            return await TipoServicioProvider.listAllTipoServicio();
        };

        const listOneTipoServicio = async (TipoServicio_id) => {
            return await TipoServicioProvider.listOneTipoServicio(TipoServicio_id);
        };



        module.exports = {
        listAllTipoServicio, listOneTipoServicio
        };

