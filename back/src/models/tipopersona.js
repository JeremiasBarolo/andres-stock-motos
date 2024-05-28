'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoPersona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TipoPersona.hasMany(models.Personas, {
        foreignKey: 'tipoPersonaId'
      })
    }
  }
  TipoPersona.init({
    descripcion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'TipoPersona',
  });
  return TipoPersona;
};