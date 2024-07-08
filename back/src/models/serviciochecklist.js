'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServicioChecklist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServicioChecklist.init({
    
  }, {
    sequelize,
    modelName: 'ServicioChecklist',
  });
  return ServicioChecklist;
};