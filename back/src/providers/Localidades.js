

    var models = require('../models');

    const listAllLocalidades= async () => {
    try {
        const Localidades = await models.Localidades.findAll(
        {
                include: [
                    {all:true}
                ]
            });
        console.log('✅ Localidades were found');
        return Localidades;
    } catch (err) {
        console.error('🛑 Error when fetching Localidades', err);
        throw err;
    }
    };

    const listOneLocalidades= async (Localidades_id) => {
    try {
        const oneLocalidades= await models.Localidades.findByPk(Localidades_id, 
        );
        if (!oneLocalidades) {
        
        return null;
        }
        return oneLocalidades;
    } catch (err) {
        
        throw err;
    }
    };

    const createLocalidades= async (DataLocalidades) => {
    

    try {
        
        const newLocalidades= await models.Localidades.create(DataLocalidades);
        
        return newLocalidades;
        
    } catch (err) {
        console.error('🛑 Error when creating Localidades', err);
        throw err;
    }
    };

    const updateLocalidades= async (Localidades_id, dataUpdated) => {
    

    try {

        const oldLocalidades= await models.Localidades.findByPk(Localidades_id);
        
        let newLocalidades = await oldLocalidades.update(dataUpdated);

        return newLocalidades;
    } catch (err) {
        console.error('🛑 Error when updating Localidades', err);
        throw err;
    }
    
    };


    const deleteLocalidades = async (Localidades_id) => {
    try {
        const deletedLocalidades = await models.Localidades.findByPk(Localidades_id, 
        );

        if (!deletedLocalidades) {
        return null;
        }
        
        await models.Localidades.destroy({ where: { id: Localidades_id } });


        return deletedLocalidades;
    } catch (err) {
        console.error('🛑 Error when deleting Localidades', err);
        throw err;
    }
    };


    module.exports = {
    listAllLocalidades, listOneLocalidades, createLocalidades, updateLocalidades, deleteLocalidades,
    };

