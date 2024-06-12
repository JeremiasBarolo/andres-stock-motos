'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tipo_Articulos', [
      {
        descripcion: 'Repuesto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Accesorio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Servicio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Insumo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tipo_Articulos', null, {});
  }
};
