'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DatosServicios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_recepcion: {
        type: Sequelize.DATE
      },
      fecha_est_entrega: {
        type: Sequelize.DATE
      },
      hora_est_entrega: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      
      modelo: {
        type: Sequelize.STRING
      },
      num_motor: {
        type: Sequelize.STRING(100)
      },
      num_chasis: {
        type: Sequelize.STRING(100)
      },
      color: {
        type: Sequelize.STRING
      },
      patente: {
        type: Sequelize.STRING
      },
      kilometros: {
        type: Sequelize.BIGINT(100)
      },
      estado_general: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('DatosServicios');
  }
};