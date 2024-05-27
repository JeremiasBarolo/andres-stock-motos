'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personas.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cuit: DataTypes.INTEGER,
    fecha_nacimiento: DataTypes.DATE,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    nro_direccion: DataTypes.INTEGER,
    mail: DataTypes.STRING,
    dni: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Personas',
  });
  return Personas;
};