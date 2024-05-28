'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      cuit: {
        type: Sequelize.BIGINT(100)
      },
      fecha_nacimiento: {
        type: Sequelize.DATE
      },
      telefono: {
        type: Sequelize.BIGINT(100)
      },
      direccion: {
        type: Sequelize.STRING
      },
      nro_direccion: {
        type: Sequelize.BIGINT(100)
      },
      mail: {
        type: Sequelize.STRING
      },
      dni: {
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
    await queryInterface.dropTable('Personas');
  }
};