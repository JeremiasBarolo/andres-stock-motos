'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoPersonas', [
      {
        descripcion: 'Proveedor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Empleado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Propietario',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoPersonas', null, {});
  }
};
