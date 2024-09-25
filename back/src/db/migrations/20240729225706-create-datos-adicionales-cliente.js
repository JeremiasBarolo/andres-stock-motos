'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DatosAdicionalesClientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(100)
      },
      telComercial: {
        type: Sequelize.STRING(500)
      },
      estadoCivil: {
        type: Sequelize.STRING(500)
      },
      empActual: {
        type: Sequelize.STRING(500)
      },
      domicilioEmp: {
        type: Sequelize.STRING(500)
      },
      telEmp: {
        type: Sequelize.BIGINT(100)
      },
      profesion: {
        type: Sequelize.STRING(500)
      },
      fechaIngreso: {
        type: Sequelize.DATE
      },
      ingresosMensuales: {
        type: Sequelize.STRING(500)
      },
      nombreConyugue: {
        type: Sequelize.STRING(500)
      },
      trabaja: {
        type: Sequelize.STRING(500)
      },
      dondeTrabaja: {
        type: Sequelize.STRING(500)
      },
      dniConyugue: {
        type: Sequelize.BIGINT(100)
      },
      razonSocial: {
        type: Sequelize.STRING(500)
      },
      ramoDeActividad: {
        type: Sequelize.STRING(500)
      },
      cuitJuridico: {
        type: Sequelize.BIGINT(100)
      },
      ivaJuridico: {
        type: Sequelize.STRING(500)
      },
      ventasMensuales: {
        type: Sequelize.STRING(500)
      },
      domicilioJuridico: {
        type: Sequelize.STRING(500)
      },
      telefonoJuridico: {
        type: Sequelize.BIGINT(100)
      },
      telGarante: {
        type: Sequelize.STRING(100)
      },
      telefax: {
        type: Sequelize.STRING(500)
      },
      nombreGarante: {
        type: Sequelize.STRING(500)
      },
      domicilioGarante: {
        type: Sequelize.STRING(500)
      },
      cuitGarante: {
        type: Sequelize.BIGINT(100)
      },
      direccionEmpGarante: {
        type: Sequelize.STRING(500)
      },
      casaPropiaAlquilada: {
        type: Sequelize.STRING(500)
      },
      edadGarante: {
        type: Sequelize.BIGINT(100)
      },
      estadoCivilGarante: {
        type: Sequelize.STRING(500)
      },
      precioOperacion: {
        type: Sequelize.BIGINT(100)
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