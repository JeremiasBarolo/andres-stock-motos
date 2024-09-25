'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Motos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelo: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      num_motor: {
        type: Sequelize.BIGINT(100)
      },
      num_cuadro: {
        type: Sequelize.BIGINT(100)
      },
      color: {
        type: Sequelize.STRING(100)
      },
      cilindrada: {
        type: Sequelize.BIGINT(100)
      },
      cert_num_fabrica: {
        type: Sequelize.BIGINT(100)
      },
      precio: {
        type: Sequelize.BIGINT(100)
      },
      kilometros: {
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
    await queryInterface.dropTable('Motos');
  }
};