'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Localidades', [
      {
        descripcion: 'Buenos Aires',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Las Perdices',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'General Deheza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Cabrera',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Localidades', null, {});
  }
};
