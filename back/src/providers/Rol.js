

    var models = require('../models');

    const listAllRol= async () => {
    try {
        const Rol = await models.Rol.findAll(
        {
                include: [
                    {all:true}
                ]
            });
        console.log('✅ Rol were found');
        return Rol;
    } catch (err) {
        console.error('🛑 Error when fetching Rol', err);
        throw err;
    }
    };

    const listOneRol= async (Rol_id) => {
    try {
        const oneRol= await models.Rol.findByPk(Rol_id, 
        );
        if (!oneRol) {
        
        return null;
        }
        return oneRol;
    } catch (err) {
        
        throw err;
    }
    };

    const createRol= async (DataRol) => {
    

    try {
        
        const newRol= await models.Rol.create(DataRol);
        
        return newRol;
        
    } catch (err) {
        console.error('🛑 Error when creating Rol', err);
        throw err;
    }
    };

    const updateRol= async (Rol_id, dataUpdated) => {
    

    try {

        const oldRol= await models.Rol.findByPk(Rol_id);
        
        let newRol = await oldRol.update(dataUpdated);

        return newRol;
    } catch (err) {
        console.error('🛑 Error when updating Rol', err);
        throw err;
    }
    
    };


    const deleteRol = async (Rol_id) => {
    try {
        const deletedRol = await models.Rol.findByPk(Rol_id, 
        );

        if (!deletedRol) {
        return null;
        }
        
        await models.Rol.destroy({ where: { id: Rol_id } });


        return deletedRol;
    } catch (err) {
        console.error('🛑 Error when deleting Rol', err);
        throw err;
    }
    };


    module.exports = {
    listAllRol, listOneRol, createRol, updateRol, deleteRol,
    };

