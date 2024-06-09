var models = require('../models');
const Formatter = require('./formatter');
const format = new Formatter();

class StockService {
    async listAllStock() {
        try {
          const Stock = await models.Stock.findAll({
            include: [{ all: true }]
          });
          console.log('✅ Stock were found');
          return format.Stock(Stock);
        } catch (err) {
          console.error('🛑 Error when fetching Stock', err);
          throw err;
        }
      }
    
      async listOneStock(Stock_id) {
        try {
          const oneStock = await models.Stock.findByPk(Stock_id);
          if (!oneStock) {
            return null;
          }
          return oneStock;
        } catch (err) {
          console.error('🛑 Error when fetching a single Usuario', err);
          throw err;
        }
      }
    
      async createStock(DataStock) {
        try {
          const newStock = await models.Stock.create(DataStock);
          return newStock;
        } catch (err) {
          console.error('🛑 Error when creating Stock', err);
          throw err;
        }
      }
    
      async updateStock(Stock_id, dataUpdated) {
        try {
          const oldStock = await models.Stock.findByPk(Stock_id);
          if (!oldStock) {
            return null;
          }
          let newStock = await oldStock.update(dataUpdated);
          return newStock;
        } catch (err) {
          console.error('🛑 Error when updating Stock', err);
          throw err;
        }
      }
    
      async deleteStock(Stock_id) {
        try {
          const deletedStock = await models.Stock.findByPk(Stock_id);
          if (!deletedStock) {
            return null;
          }
          await models.Stock.destroy({ where: { id: Stock_id } });
          return deletedStock;
        } catch (err) {
          console.error('🛑 Error when deleting Stock', err);
          throw err;
        }
      }
}

module.exports = StockService;