'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('TipoServicios', [
        { descripcion: 'Servicio Garantia', createdAt: new Date(), updatedAt: new Date() },
        { descripcion: 'Reparacion General', createdAt: new Date(), updatedAt: new Date() },
        { descripcion: 'Mantenimiento Periodico', createdAt: new Date(), updatedAt: new Date() },
        { descripcion: 'Puesta Marcha', createdAt: new Date(), updatedAt: new Date() },
        { descripcion: 'Otro Servicio', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('TipoServicios', null, {});
  }
};
