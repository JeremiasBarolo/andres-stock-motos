'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TipoMovimientos', [
      {
        descripcion: 'Compra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Venta Moto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Venta Repuesto',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Servicio',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        descripcion: 'Venta Accesorio',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TipoMovimientos', null, {});
  }
};
