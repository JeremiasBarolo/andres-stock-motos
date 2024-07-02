'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Rols', [
      {
        descripcion: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Empleado',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Rols', null, {});
  }
};
