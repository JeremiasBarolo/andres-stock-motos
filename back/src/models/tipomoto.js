'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoMoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TipoMoto.hasMany(models.Motos, {
        foreignKey: 'tipoMotoId'
      })
    }
  }
  TipoMoto.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoMoto',
  });
  return TipoMoto;
};