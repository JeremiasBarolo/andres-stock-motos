'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('checklists', [
      { descripcion: 'NO APLICA', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Cambio de aceite de motor', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Cambio de filtro de aceite', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Limpieza / Reemplazo de filtro de aceite', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Limpieza de carburador / Carburación', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Control / Registro de válvulas', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Lubricación general', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Ajuste de frenos', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Cambio de filtro de aire', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Ajuste de cadena', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Verificación de luces', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Verificación de neumáticos', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Otros', createdAt: new Date(), updatedAt: new Date() },
      { descripcion: 'Prueba de manejo', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('checklists', null, {});
  }
};
