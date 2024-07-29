'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DatosAdicionalesCliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DatosAdicionalesCliente.belongsTo(models.Personas, {
        foreignKey: 'clienteId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',

      });
    }
  }
  DatosAdicionalesCliente.init({
    telComercial: DataTypes.STRING,
    estadoCivil: DataTypes.STRING,
    empActual: DataTypes.STRING,
    domicilioEmp: DataTypes.STRING,
    telEmp: DataTypes.INTEGER,
    profesion: DataTypes.STRING,
    fechaIngreso: DataTypes.DATE,
    ingresosMensuales: DataTypes.STRING,
    nombreConyugue: DataTypes.STRING,
    trabaja: DataTypes.STRING,
    dondeTrabaja: DataTypes.STRING,
    dniConyugue: DataTypes.INTEGER,
    razonSocial: DataTypes.STRING,
    ramoDeActividad: DataTypes.STRING,
    cuitJuridico: DataTypes.INTEGER,
    ivaJuridico: DataTypes.STRING,
    ventasMensuales: DataTypes.STRING,
    domicilioJuridico: DataTypes.STRING,
    telefonoJuridico: DataTypes.INTEGER,
    telefax: DataTypes.STRING,
    nombreGarante: DataTypes.STRING,
    domicilioGarante: DataTypes.STRING,
    cuitGarante: DataTypes.INTEGER,
    direccionEmpGarante: DataTypes.STRING,
    casaPropiaAlquilada: DataTypes.STRING,
    edadGarante: DataTypes.INTEGER,
    estadoCivilGarante: DataTypes.STRING,
    precioOperacion: DataTypes.INTEGER,
    señaOperacion: DataTypes.INTEGER,
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
    debe: DataTypes.INTEGER,
    pago: DataTypes.STRING,
    debeTrue: DataTypes.BOOLEAN,
    pagoTrue: DataTypes.BOOLEAN,
    fechaRealizacion: DataTypes.DATE,
    conceptoFinal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DatosAdicionalesCliente',
  });
  return DatosAdicionalesCliente;
};