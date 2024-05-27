

    var models = require('../models');

    const listAllMotos= async () => {
    try {
        const Motos = await models.Motos.findAll(
        );
        console.log('✅ Motos were found');
        return Motos;
    } catch (err) {
        console.error('🛑 Error when fetching Motos', err);
        throw err;
    }
    };

    const listOneMotos= async (Motos_id) => {
    try {
        const oneMotos= await models.Motos.findByPk(Motos_id, 
        );
        if (!oneMotos) {
        
        return null;
        }
        return oneMotos;
    } catch (err) {
        
        throw err;
    }
    };

    const createMotos= async (DataMotos) => {
    

    try {
        
        const newMotos= await models.Motos.create(DataMotos);
        
        return newMotos;
        
    } catch (err) {
        console.error('🛑 Error when creating Motos', err);
        throw err;
    }
    };

    const updateMotos= async (Motos_id, dataUpdated) => {
    

    try {

        const oldMotos= await models.Motos.findByPk(Motos_id);
        
        let newMotos = await oldMotos.update(dataUpdated);

        return newMotos;
    } catch (err) {
        console.error('🛑 Error when updating Motos', err);
        throw err;
    }
    
    };


    const deleteMotos = async (Motos_id) => {
    try {
        const deletedMotos = await models.Motos.findByPk(Motos_id, 
        );

        if (!deletedMotos) {
        return null;
        }
        
        await models.Motos.destroy({ where: { id: Motos_id } });


        return deletedMotos;
    } catch (err) {
        console.error('🛑 Error when deleting Motos', err);
        throw err;
    }
    };


    module.exports = {
    listAllMotos, listOneMotos, createMotos, updateMotos, deleteMotos,
    };

