

    var models = require('../models');

    const listAllMovimientos= async () => {
    try {
        const Movimientos = await models.Movimientos.findAll(
        );
        console.log('✅ Movimientos were found');
        return Movimientos;
    } catch (err) {
        console.error('🛑 Error when fetching Movimientos', err);
        throw err;
    }
    };

    const listOneMovimientos= async (Movimientos_id) => {
    try {
        const oneMovimientos= await models.Movimientos.findByPk(Movimientos_id, 
        );
        if (!oneMovimientos) {
        
        return null;
        }
        return oneMovimientos;
    } catch (err) {
        
        throw err;
    }
    };

    const createMovimientos= async (DataMovimientos) => {
    

    try {
        
        const newMovimientos= await models.Movimientos.create(DataMovimientos);
        
        return newMovimientos;
        
    } catch (err) {
        console.error('🛑 Error when creating Movimientos', err);
        throw err;
    }
    };

    const updateMovimientos= async (Movimientos_id, dataUpdated) => {
    

    try {

        const oldMovimientos= await models.Movimientos.findByPk(Movimientos_id);
        
        let newMovimientos = await oldMovimientos.update(dataUpdated);

        return newMovimientos;
    } catch (err) {
        console.error('🛑 Error when updating Movimientos', err);
        throw err;
    }
    
    };


    const deleteMovimientos = async (Movimientos_id) => {
    try {
        const deletedMovimientos = await models.Movimientos.findByPk(Movimientos_id, 
        );

        if (!deletedMovimientos) {
        return null;
        }
        
        await models.Movimientos.destroy({ where: { id: Movimientos_id } });


        return deletedMovimientos;
    } catch (err) {
        console.error('🛑 Error when deleting Movimientos', err);
        throw err;
    }
    };


    module.exports = {
    listAllMovimientos, listOneMovimientos, createMovimientos, updateMovimientos, deleteMovimientos,
    };

