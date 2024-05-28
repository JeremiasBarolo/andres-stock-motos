

    var models = require('../models');

    const listAllTipoMovimientos= async () => {
    try {
        const TipoMovimientos = await models.TipoMovimientos.findAll(
        {
                include: [
                    {all:true}
                ]
            });
        console.log('✅ TipoMovimientos were found');
        return TipoMovimientos;
    } catch (err) {
        console.error('🛑 Error when fetching TipoMovimientos', err);
        throw err;
    }
    };

    const listOneTipoMovimientos= async (TipoMovimientos_id) => {
    try {
        const oneTipoMovimientos= await models.TipoMovimientos.findByPk(TipoMovimientos_id, 
        );
        if (!oneTipoMovimientos) {
        
        return null;
        }
        return oneTipoMovimientos;
    } catch (err) {
        
        throw err;
    }
    };

    const createTipoMovimientos= async (DataTipoMovimientos) => {
    

    try {
        
        const newTipoMovimientos= await models.TipoMovimientos.create(DataTipoMovimientos);
        
        return newTipoMovimientos;
        
    } catch (err) {
        console.error('🛑 Error when creating TipoMovimientos', err);
        throw err;
    }
    };

    const updateTipoMovimientos= async (TipoMovimientos_id, dataUpdated) => {
    

    try {

        const oldTipoMovimientos= await models.TipoMovimientos.findByPk(TipoMovimientos_id);
        
        let newTipoMovimientos = await oldTipoMovimientos.update(dataUpdated);

        return newTipoMovimientos;
    } catch (err) {
        console.error('🛑 Error when updating TipoMovimientos', err);
        throw err;
    }
    
    };


    const deleteTipoMovimientos = async (TipoMovimientos_id) => {
    try {
        const deletedTipoMovimientos = await models.TipoMovimientos.findByPk(TipoMovimientos_id, 
        );

        if (!deletedTipoMovimientos) {
        return null;
        }
        
        await models.TipoMovimientos.destroy({ where: { id: TipoMovimientos_id } });


        return deletedTipoMovimientos;
    } catch (err) {
        console.error('🛑 Error when deleting TipoMovimientos', err);
        throw err;
    }
    };


    module.exports = {
    listAllTipoMovimientos, listOneTipoMovimientos, createTipoMovimientos, updateTipoMovimientos, deleteTipoMovimientos,
    };

