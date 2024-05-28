

    var models = require('../models');

    const listAllMarca= async () => {
    try {
        const Marca = await models.Marca.findAll(
        {
                include: [
                    {all:true}
                ]
            });
        console.log('✅ Marca were found');
        return Marca;
    } catch (err) {
        console.error('🛑 Error when fetching Marca', err);
        throw err;
    }
    };

    const listOneMarca= async (Marca_id) => {
    try {
        const oneMarca= await models.Marca.findByPk(Marca_id, 
        );
        if (!oneMarca) {
        
        return null;
        }
        return oneMarca;
    } catch (err) {
        
        throw err;
    }
    };

    const createMarca= async (DataMarca) => {
    

    try {
        
        const newMarca= await models.Marca.create(DataMarca);
        
        return newMarca;
        
    } catch (err) {
        console.error('🛑 Error when creating Marca', err);
        throw err;
    }
    };

    const updateMarca= async (Marca_id, dataUpdated) => {
    

    try {

        const oldMarca= await models.Marca.findByPk(Marca_id);
        
        let newMarca = await oldMarca.update(dataUpdated);

        return newMarca;
    } catch (err) {
        console.error('🛑 Error when updating Marca', err);
        throw err;
    }
    
    };


    const deleteMarca = async (Marca_id) => {
    try {
        const deletedMarca = await models.Marca.findByPk(Marca_id, 
        );

        if (!deletedMarca) {
        return null;
        }
        
        await models.Marca.destroy({ where: { id: Marca_id } });


        return deletedMarca;
    } catch (err) {
        console.error('🛑 Error when deleting Marca', err);
        throw err;
    }
    };


    module.exports = {
    listAllMarca, listOneMarca, createMarca, updateMarca, deleteMarca,
    };

