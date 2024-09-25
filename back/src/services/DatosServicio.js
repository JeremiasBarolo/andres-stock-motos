

        const { DatosServicioProvider } = require('../providers');

        const listAllDatosServicio = async () => {
            return await DatosServicioProvider.listAllDatosServicio();
        };

        const listOneDatosServicio = async (DatosServicio_id) => {
            return await DatosServicioProvider.listOneDatosServicio(DatosServicio_id);
        };

        const createDatosServicio = async (DatosServicioData) => {
            return await DatosServicioProvider.createDatosServicio(DatosServicioData);
        };


        const updateDatosServicio = async (DatosServicio_id, updateDatosServicio) => {
            return await DatosServicioProvider.updateDatosServicio(DatosServicio_id, updateDatosServicio);
        };

        const updateInsumos = async (DatosServicio_id, updateDatosServicio) => {
            return await DatosServicioProvider.updateInsumos(DatosServicio_id, updateDatosServicio);
        };

        const deleteDatosServicio = async (DatosServicio_id) => {
            return await DatosServicioProvider.deleteDatosServicio(DatosServicio_id);
        };


        module.exports = {
        listAllDatosServicio, 
        listOneDatosServicio, 
        createDatosServicio, 
        updateDatosServicio, 
        deleteDatosServicio,
        updateInsumos 
        };

