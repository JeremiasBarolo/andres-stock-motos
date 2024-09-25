'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Rols', [
      {
        descripcion: 'Admin',
        isAdmin: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Empleado',
        isAdmin: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Propietario',
        isAdmin: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Rols', null, {});
  }
};
