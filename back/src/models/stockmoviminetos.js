'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StockMoviminetos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  StockMoviminetos.init({
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StockMoviminetos',
  });
  return StockMoviminetos;
};