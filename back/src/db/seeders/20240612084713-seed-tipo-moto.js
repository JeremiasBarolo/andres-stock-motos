'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoMotos', [
      {
        descripcion: 'Usada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Nueva',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'En Consignacion',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoMotos', null, {});
  }
};
