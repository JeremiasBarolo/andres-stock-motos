'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Marcas', [
      {
        descripcion: 'BMW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'HONDA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'GUERRERO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'MOTOMEL',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Marcas', null, {});
  }
};
