const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Usuarios', [
      {
        user: 'Admin',
        password: await bcrypt.hash(process.env.ADMIN_PASSWORD , 10),
        rolId: 3,
        personaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
