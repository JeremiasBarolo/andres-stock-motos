'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OperacionVentaMotos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OperacionVentaMotos.belongsTo(models.Movimientos, {
        foreignKey: 'movimientoId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',

      });
    }
  }
  OperacionVentaMotos.init({
    precioOperacion: DataTypes.INTEGER,
    seniaOperacion: DataTypes.INTEGER,
    entregaOperacion: DataTypes.INTEGER,
    otrasEntOperacion: DataTypes.INTEGER,
    observacionOperacion: DataTypes.STRING,
    cuotas: DataTypes.INTEGER,
    valorCuota: DataTypes.INTEGER,
    diaVencimientoCuota: DataTypes.INTEGER,
    diaInicioCuota: DataTypes.STRING,
    mesInicioCuota: DataTypes.STRING,
    anioInicioCuota: DataTypes.INTEGER,
    diaFinalCuota: DataTypes.INTEGER,
    mesFinalCuota: DataTypes.STRING,
    anioFinalCuota: DataTypes.INTEGER,
    lugarPago: DataTypes.STRING,
    gastosPap: DataTypes.INTEGER,
    prenda: DataTypes.INTEGER,
    inscripcion: DataTypes.INTEGER,
    pago: DataTypes.STRING,
    fechaRealizacion: DataTypes.DATE,
    conceptoFinal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OperacionVentaMotos',
  });
  return OperacionVentaMotos;
};