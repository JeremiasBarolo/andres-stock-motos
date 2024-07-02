'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PedidosStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       
       PedidosStock.belongsTo(models.Stock, { 
        foreignKey: 'stockId' 
      });

    
      PedidosStock.hasOne(models.Pedidos, { 
        foreignKey: 'pedidoId' 
      });
    }
  }
  PedidosStock.init({
    cantidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PedidosStock',
  });
  return PedidosStock;
};