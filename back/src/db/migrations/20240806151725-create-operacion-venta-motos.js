'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OperacionVentaMotos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      precioOperacion: {
        type: Sequelize.BIGINT(100)
      },
      seniaOperacion: {
        type: Sequelize.BIGINT(100)
      },
      entregaOperacion: {
        type: Sequelize.BIGINT(100)
      },
      otrasEntOperacion: {
        type: Sequelize.BIGINT(100)
      },
      observacionOperacion: {
        type: Sequelize.STRING(500)
      },
      cuotas: {
        type: Sequelize.BIGINT(100)
      },
      valorCuota: {
        type: Sequelize.BIGINT(100)
      },
      diaVencimientoCuota: {
        type: Sequelize.BIGINT(100)
      },
      diaInicioCuota: {
        type: Sequelize.STRING(500)
      },
      mesInicioCuota: {
        type: Sequelize.STRING(500)
      },
      anioInicioCuota: {
        type: Sequelize.BIGINT(100)
      },
      diaFinalCuota: {
        type: Sequelize.BIGINT(100)
      },
      mesFinalCuota: {
        type: Sequelize.STRING(500)
      },
      anioFinalCuota: {
        type: Sequelize.BIGINT(100)
      },
      lugarPago: {
        type: Sequelize.STRING(500)
      },
      gastosPap: {
        type: Sequelize.BIGINT(100)
      },
      prenda: {
        type: Sequelize.BIGINT(100)
      },
      inscripcion: {
        type: Sequelize.BIGINT(100)
      },
      pago: {
        type: Sequelize.STRING(500)
      },
      fechaRealizacion: {
        type: Sequelize.DATE
      },
      conceptoFinal: {
        type: Sequelize.STRING(500)
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
    await queryInterface.dropTable('OperacionVentaMotos');
  }
};