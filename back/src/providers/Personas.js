

    var models = require('../models');

    const listAllPersonas= async () => {
    try {
        const Personas = await models.Personas.findAll(
        );
        console.log('✅ Personas were found');
        return Personas;
    } catch (err) {
        console.error('🛑 Error when fetching Personas', err);
        throw err;
    }
    };

    const listOnePersonas= async (Personas_id) => {
    try {
        const onePersonas= await models.Personas.findByPk(Personas_id, 
        );
        if (!onePersonas) {
        
        return null;
        }
        return onePersonas;
    } catch (err) {
        
        throw err;
    }
    };

    const createPersonas= async (DataPersonas) => {
    

    try {
        
        const newPersonas= await models.Personas.create(DataPersonas);
        
        return newPersonas;
        
    } catch (err) {
        console.error('🛑 Error when creating Personas', err);
        throw err;
    }
    };

    const updatePersonas= async (Personas_id, dataUpdated) => {
    

    try {

        const oldPersonas= await models.Personas.findByPk(Personas_id);
        
        let newPersonas = await oldPersonas.update(dataUpdated);

        return newPersonas;
    } catch (err) {
        console.error('🛑 Error when updating Personas', err);
        throw err;
    }
    
    };


    const deletePersonas = async (Personas_id) => {
    try {
        const deletedPersonas = await models.Personas.findByPk(Personas_id, 
        );

        if (!deletedPersonas) {
        return null;
        }
        
        await models.Personas.destroy({ where: { id: Personas_id } });


        return deletedPersonas;
    } catch (err) {
        console.error('🛑 Error when deleting Personas', err);
        throw err;
    }
    };


    module.exports = {
    listAllPersonas, listOnePersonas, createPersonas, updatePersonas, deletePersonas,
    };

