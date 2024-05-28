'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoMovimientos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TipoMovimientos.hasMany(models.Movimientos, {
        foreignKey: 'tipoMovimientoId'
      })
    }
  }
  TipoMovimientos.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoMovimientos',
  });
  return TipoMovimientos;
};