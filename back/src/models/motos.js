'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Motos.hasMany(models.Movimientos, {
        foreignKey: 'motoId',
        onUpdate: 'CASCADE',
      })

      Motos.belongsTo(models.Marca, {
        foreignKey: 'marcaId',
        onUpdate: 'CASCADE',
      });

      Motos.belongsTo(models.TipoMoto, {
        foreignKey: 'tipoMotoId',
        onUpdate: 'CASCADE',
      });

      
    }
  }
  Motos.init({
    modelo: DataTypes.INTEGER,
    color: DataTypes.STRING,
    year: DataTypes.INTEGER,
    num_motor: DataTypes.INTEGER,
    num_cuadro: DataTypes.INTEGER,
    cilindrada: DataTypes.INTEGER,
    cert_num_fabrica: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    kilometros: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Motos',
  });
  return Motos;
};