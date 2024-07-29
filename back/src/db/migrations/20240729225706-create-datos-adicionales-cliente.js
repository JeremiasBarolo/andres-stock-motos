'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DatosAdicionalesClientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      telComercial: {
        type: Sequelize.STRING(100)
      },
      estadoCivil: {
        type: Sequelize.STRING(100)
      },
      empActual: {
        type: Sequelize.STRING(100)
      },
      domicilioEmp: {
        type: Sequelize.STRING(100)
      },
      telEmp: {
        type: Sequelize.INTEGER
      },
      profesion: {
        type: Sequelize.STRING(100)
      },
      fechaIngreso: {
        type: Sequelize.DATE
      },
      ingresosMensuales: {
        type: Sequelize.STRING(100)
      },
      nombreConyugue: {
        type: Sequelize.STRING(100)
      },
      trabaja: {
        type: Sequelize.STRING(100)
      },
      dondeTrabaja: {
        type: Sequelize.STRING(100)
      },
      dniConyugue: {
        type: Sequelize.INTEGER
      },
      razonSocial: {
        type: Sequelize.STRING(100)
      },
      ramoDeActividad: {
        type: Sequelize.STRING(100)
      },
      cuitJuridico: {
        type: Sequelize.INTEGER
      },
      ivaJuridico: {
        type: Sequelize.STRING(100)
      },
      ventasMensuales: {
        type: Sequelize.STRING(100)
      },
      domicilioJuridico: {
        type: Sequelize.STRING(100)
      },
      telefonoJuridico: {
        type: Sequelize.INTEGER
      },
      telefax: {
        type: Sequelize.STRING(100)
      },
      nombreGarante: {
        type: Sequelize.STRING(100)
      },
      domicilioGarante: {
        type: Sequelize.STRING(100)
      },
      cuitGarante: {
        type: Sequelize.INTEGER
      },
      direccionEmpGarante: {
        type: Sequelize.STRING(100)
      },
      casaPropiaAlquilada: {
        type: Sequelize.STRING(100)
      },
      edadGarante: {
        type: Sequelize.INTEGER
      },
      estadoCivilGarante: {
        type: Sequelize.STRING(100)
      },
      precioOperacion: {
        type: Sequelize.INTEGER
      },
      señaOperacion: {
        type: Sequelize.INTEGER
      },
      entregaOperacion: {
        type: Sequelize.INTEGER
      },
      otrasEntOperacion: {
        type: Sequelize.INTEGER
      },
      observacionOperacion: {
        type: Sequelize.STRING(100)
      },
      cuotas: {
        type: Sequelize.INTEGER
      },
      valorCuota: {
        type: Sequelize.INTEGER
      },
      diaVencimientoCuota: {
        type: Sequelize.INTEGER
      },
      diaInicioCuota: {
        type: Sequelize.STRING(100)
      },
      mesInicioCuota: {
        type: Sequelize.STRING(100)
      },
      anioInicioCuota: {
        type: Sequelize.INTEGER
      },
      diaFinalCuota: {
        type: Sequelize.INTEGER
      },
      mesFinalCuota: {
        type: Sequelize.STRING(100)
      },
      anioFinalCuota: {
        type: Sequelize.INTEGER
      },
      lugarPago: {
        type: Sequelize.STRING(100)
      },
      gastosPap: {
        type: Sequelize.INTEGER
      },
      prenda: {
        type: Sequelize.INTEGER
      },
      inscripcion: {
        type: Sequelize.INTEGER
      },
      debe: {
        type: Sequelize.INTEGER
      },
      pago: {
        type: Sequelize.STRING(100)
      },
      debeTrue: {
        type: Sequelize.BOOLEAN
      },
      pagoTrue: {
        type: Sequelize.BOOLEAN
      },
      fechaRealizacion: {
        type: Sequelize.DATE
      },
      conceptoFinal: {
        type: Sequelize.STRING(100)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DatosAdicionalesClientes');
  }
};