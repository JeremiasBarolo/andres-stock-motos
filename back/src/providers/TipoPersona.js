

    var models = require('../models');

    const listAllTipoPersona= async () => {
    try {
        const TipoPersona = await models.TipoPersona.findAll(
        {
                include: [
                    {all:true}
                ]
            });
        console.log('✅ TipoPersona were found');
        return TipoPersona;
    } catch (err) {
        console.error('🛑 Error when fetching TipoPersona', err);
        throw err;
    }
    };

    const listOneTipoPersona= async (TipoPersona_id) => {
    try {
        const oneTipoPersona= await models.TipoPersona.findByPk(TipoPersona_id, 
        );
        if (!oneTipoPersona) {
        
        return null;
        }
        return oneTipoPersona;
    } catch (err) {
        
        throw err;
    }
    };

    const createTipoPersona= async (DataTipoPersona) => {
    

    try {
        
        const newTipoPersona= await models.TipoPersona.create(DataTipoPersona);
        
        return newTipoPersona;
        
    } catch (err) {
        console.error('🛑 Error when creating TipoPersona', err);
        throw err;
    }
    };

    const updateTipoPersona= async (TipoPersona_id, dataUpdated) => {
    

    try {

        const oldTipoPersona= await models.TipoPersona.findByPk(TipoPersona_id);
        
        let newTipoPersona = await oldTipoPersona.update(dataUpdated);

        return newTipoPersona;
    } catch (err) {
        console.error('🛑 Error when updating TipoPersona', err);
        throw err;
    }
    
    };


    const deleteTipoPersona = async (TipoPersona_id) => {
    try {
        const deletedTipoPersona = await models.TipoPersona.findByPk(TipoPersona_id, 
        );

        if (!deletedTipoPersona) {
        return null;
        }
        
        await models.TipoPersona.destroy({ where: { id: TipoPersona_id } });


        return deletedTipoPersona;
    } catch (err) {
        console.error('🛑 Error when deleting TipoPersona', err);
        throw err;
    }
    };


    module.exports = {
    listAllTipoPersona, listOneTipoPersona, createTipoPersona, updateTipoPersona, deleteTipoPersona,
    };

