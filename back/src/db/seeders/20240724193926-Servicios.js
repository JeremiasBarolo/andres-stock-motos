'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stocks', [
      {
        nombre: 'Cambio de Filtro de aire',
        descripcion: 'Cambio de Filtro de aire',
        costo: 12000,
        tipoId: 3,
        personaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cambio de Filtro de Aceite',
        descripcion: 'Cambio de Filtro de Aceite',
        costo: 12000,
        tipoId: 3,
        personaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stocks', null, {});
  }
};