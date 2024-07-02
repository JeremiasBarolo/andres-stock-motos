'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
   
    static associate(models) {
      
      Stock.belongsTo(models.Tipo_Articulo, {
        foreignKey: 'tipoId',
        onUpdate: 'CASCADE',
      });

      Stock.belongsTo(models.Personas, {
        foreignKey: 'personaId',
        onUpdate: 'CASCADE',
      });

      Stock.belongsToMany(models.Movimientos, 
        { 
          through: models.StockMoviminetos,
          foreignKey: 'stockId',
        
      });

      Stock.hasMany(models.PedidosStock, {
        foreignKey: 'stockId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Stock.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    costo: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};