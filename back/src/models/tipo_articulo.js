'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo_Articulo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tipo_Articulo.hasMany(models.Stock, {
        foreignKey: 'tipoId'
      })
    }
  }
  Tipo_Articulo.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tipo_Articulo',
  });
  return Tipo_Articulo;
};