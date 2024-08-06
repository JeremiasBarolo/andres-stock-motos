const faker = require('faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Personas', [
      {
        nombre: 'Admin',
        apellido: 'Admin',
        cuit: '99999999999',
        fecha_nacimiento: new Date(),
        telefono: '999999999', 
        direccion: 'Algun Lugar del Mundo',
        nro_direccion: '999',
        mail: 'admin@admin.com',
        dni: '99999999',
        tipoPersonaId: 4,
        localidadId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        cuit: faker.datatype.number({ min: 10000000000, max: 99999999999 }).toString(),
        fecha_nacimiento: faker.date.past(50, new Date()),
        telefono: faker.phone.phoneNumber().replace(/[^\d]/g, '').slice(0, 10), 
        direccion: faker.address.streetAddress(),
        nro_direccion: faker.datatype.number({ min: 1, max: 9999 }).toString(),
        mail: faker.internet.email(),
        dni: faker.datatype.number({ min: 10000000, max: 99999999 }).toString(),
        tipoPersonaId: 1,
        localidadId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        cuit: faker.datatype.number({ min: 10000000000, max: 99999999999 }).toString(),
        fecha_nacimiento: faker.date.past(50, new Date()),
        telefono: faker.phone.phoneNumber().replace(/[^\d]/g, '').slice(0, 10), 
        direccion: faker.address.streetAddress(),
        nro_direccion: faker.datatype.number({ min: 1, max: 9999 }).toString(),
        mail: faker.internet.email(),
        dni: faker.datatype.number({ min: 10000000, max: 99999999 }).toString(),
        tipoPersonaId: 2,
        localidadId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        cuit: faker.datatype.number({ min: 10000000000, max: 99999999999 }).toString(),
        fecha_nacimiento: faker.date.past(50, new Date()),
        telefono: faker.phone.phoneNumber().replace(/[^\d]/g, '').slice(0, 10), 
        direccion: faker.address.streetAddress(),
        nro_direccion: faker.datatype.number({ min: 1, max: 9999 }).toString(),
        mail: faker.internet.email(),
        dni: faker.datatype.number({ min: 10000000, max: 99999999 }).toString(),
        tipoPersonaId: 3,
        localidadId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Personas', null, {});
  }
};
