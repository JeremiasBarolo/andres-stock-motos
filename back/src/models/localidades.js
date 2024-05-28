'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Localidades.hasMany(models.Personas, {
        foreignKey: 'localidadId'
      })
    }
  }
  Localidades.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Localidades',
  });
  return Localidades;
};