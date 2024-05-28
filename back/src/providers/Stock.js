

    var models = require('../models');

    const listAllStock= async () => {
    try {
        const Stock = await models.Stock.findAll(
        {
                include: [
                    {all:true}
                ]
            });
        console.log('✅ Stock were found');
        return Stock;
    } catch (err) {
        console.error('🛑 Error when fetching Stock', err);
        throw err;
    }
    };

    const listOneStock= async (Stock_id) => {
    try {
        const oneStock= await models.Stock.findByPk(Stock_id, 
        );
        if (!oneStock) {
        
        return null;
        }
        return oneStock;
    } catch (err) {
        
        throw err;
    }
    };

    const createStock= async (DataStock) => {
    

    try {
        
        const newStock= await models.Stock.create(DataStock);
        
        return newStock;
        
    } catch (err) {
        console.error('🛑 Error when creating Stock', err);
        throw err;
    }
    };

    const updateStock= async (Stock_id, dataUpdated) => {
    

    try {

        const oldStock= await models.Stock.findByPk(Stock_id);
        
        let newStock = await oldStock.update(dataUpdated);

        return newStock;
    } catch (err) {
        console.error('🛑 Error when updating Stock', err);
        throw err;
    }
    
    };


    const deleteStock = async (Stock_id) => {
    try {
        const deletedStock = await models.Stock.findByPk(Stock_id, 
        );

        if (!deletedStock) {
        return null;
        }
        
        await models.Stock.destroy({ where: { id: Stock_id } });


        return deletedStock;
    } catch (err) {
        console.error('🛑 Error when deleting Stock', err);
        throw err;
    }
    };


    module.exports = {
    listAllStock, listOneStock, createStock, updateStock, deleteStock,
    };

