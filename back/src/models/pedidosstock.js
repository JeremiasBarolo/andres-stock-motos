'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PedidosStock extends Model {
    
    static associate(models) {
       
      PedidosStock.belongsTo(models.Pedidos, { foreignKey: 'pedidoId' });
      PedidosStock.belongsTo(models.Stock, { foreignKey: 'stockId' });
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