

    var models = require('../models');

    const listAllTipoMoto= async () => {
    try {
        const TipoMoto = await models.TipoMoto.findAll(
        {
                include: [
                    {all:true}
                ]
            });
        console.log('✅ TipoMoto were found');
        return TipoMoto;
    } catch (err) {
        console.error('🛑 Error when fetching TipoMoto', err);
        throw err;
    }
    };

    const listOneTipoMoto= async (TipoMoto_id) => {
    try {
        const oneTipoMoto= await models.TipoMoto.findByPk(TipoMoto_id, 
        );
        if (!oneTipoMoto) {
        
        return null;
        }
        return oneTipoMoto;
    } catch (err) {
        
        throw err;
    }
    };

    const createTipoMoto= async (DataTipoMoto) => {
    

    try {
        
        const newTipoMoto= await models.TipoMoto.create(DataTipoMoto);
        
        return newTipoMoto;
        
    } catch (err) {
        console.error('🛑 Error when creating TipoMoto', err);
        throw err;
    }
    };

    const updateTipoMoto= async (TipoMoto_id, dataUpdated) => {
    

    try {

        const oldTipoMoto= await models.TipoMoto.findByPk(TipoMoto_id);
        
        let newTipoMoto = await oldTipoMoto.update(dataUpdated);

        return newTipoMoto;
    } catch (err) {
        console.error('🛑 Error when updating TipoMoto', err);
        throw err;
    }
    
    };


    const deleteTipoMoto = async (TipoMoto_id) => {
    try {
        const deletedTipoMoto = await models.TipoMoto.findByPk(TipoMoto_id, 
        );

        if (!deletedTipoMoto) {
        return null;
        }
        
        await models.TipoMoto.destroy({ where: { id: TipoMoto_id } });


        return deletedTipoMoto;
    } catch (err) {
        console.error('🛑 Error when deleting TipoMoto', err);
        throw err;
    }
    };


    module.exports = {
    listAllTipoMoto, listOneTipoMoto, createTipoMoto, updateTipoMoto, deleteTipoMoto,
    };

