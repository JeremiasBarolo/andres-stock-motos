

    var models = require('../models');

    const listAllUsuarios= async () => {
    try {
        const Usuarios = await models.Usuarios.findAll(
        {
                include: [
                    {all:true}
                ]
            });
        console.log('✅ Usuarios were found');
        return Usuarios;
    } catch (err) {
        console.error('🛑 Error when fetching Usuarios', err);
        throw err;
    }
    };

    const listOneUsuarios= async (Usuarios_id) => {
    try {
        const oneUsuarios= await models.Usuarios.findByPk(Usuarios_id, 
        );
        if (!oneUsuarios) {
        
        return null;
        }
        return oneUsuarios;
    } catch (err) {
        
        throw err;
    }
    };

    const createUsuarios= async (DataUsuarios) => {
    

    try {
        
        const newUsuarios= await models.Usuarios.create(DataUsuarios);
        
        return newUsuarios;
        
    } catch (err) {
        console.error('🛑 Error when creating Usuarios', err);
        throw err;
    }
    };

    const updateUsuarios= async (Usuarios_id, dataUpdated) => {
    

    try {

        const oldUsuarios= await models.Usuarios.findByPk(Usuarios_id);
        
        let newUsuarios = await oldUsuarios.update(dataUpdated);

        return newUsuarios;
    } catch (err) {
        console.error('🛑 Error when updating Usuarios', err);
        throw err;
    }
    
    };


    const deleteUsuarios = async (Usuarios_id) => {
    try {
        const deletedUsuarios = await models.Usuarios.findByPk(Usuarios_id, 
        );

        if (!deletedUsuarios) {
        return null;
        }
        
        await models.Usuarios.destroy({ where: { id: Usuarios_id } });


        return deletedUsuarios;
    } catch (err) {
        console.error('🛑 Error when deleting Usuarios', err);
        throw err;
    }
    };


    module.exports = {
    listAllUsuarios, listOneUsuarios, createUsuarios, updateUsuarios, deleteUsuarios,
    };

