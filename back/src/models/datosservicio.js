'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DatosServicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DatosServicio.init({
    tipo_serivio: DataTypes.STRING,
    fecha_recepcion: DataTypes.DATE,
    fecha_est_entrega: DataTypes.DATE,
    hora_est_entrega: DataTypes.INTEGER,
    modelo: DataTypes.STRING,
    num_motor: DataTypes.INTEGER,
    color: DataTypes.STRING,
    patente: DataTypes.STRING,
    kilometros: DataTypes.INTEGER,
    estado_general: DataTypes.STRING,
    observaciones: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DatosServicio',
  });
  return DatosServicio;
};