

    var models = require('../models');

    const listAllDatosServicio= async () => {
    try {
        const DatosServicio = await models.DatosServicio.findAll(
        );
        console.log('✅ DatosServicio were found');
        return DatosServicio;
    } catch (err) {
        console.error('🛑 Error when fetching DatosServicio', err);
        throw err;
    }
    };

    const listOneDatosServicio= async (DatosServicio_id) => {
    try {
        const oneDatosServicio= await models.DatosServicio.findByPk(DatosServicio_id, 
        );
        if (!oneDatosServicio) {
        
        return null;
        }
        return oneDatosServicio;
    } catch (err) {
        
        throw err;
    }
    };

    const createDatosServicio= async (DataDatosServicio) => {
    

    try {
        
        const newDatosServicio= await models.DatosServicio.create(DataDatosServicio);
        
        return newDatosServicio;
        
    } catch (err) {
        console.error('🛑 Error when creating DatosServicio', err);
        throw err;
    }
    };

    const updateDatosServicio= async (DatosServicio_id, dataUpdated) => {
    

    try {

        const oldDatosServicio= await models.DatosServicio.findByPk(DatosServicio_id);
        
        let newDatosServicio = await oldDatosServicio.update(dataUpdated);

        return newDatosServicio;
    } catch (err) {
        console.error('🛑 Error when updating DatosServicio', err);
        throw err;
    }
    
    };


    const deleteDatosServicio = async (DatosServicio_id) => {
    try {
        const deletedDatosServicio = await models.DatosServicio.findByPk(DatosServicio_id, 
        );

        if (!deletedDatosServicio) {
        return null;
        }
        
        await models.DatosServicio.destroy({ where: { id: DatosServicio_id } });


        return deletedDatosServicio;
    } catch (err) {
        console.error('🛑 Error when deleting DatosServicio', err);
        throw err;
    }
    };


    module.exports = {
    listAllDatosServicio, listOneDatosServicio, createDatosServicio, updateDatosServicio, deleteDatosServicio,
    };

