const { where } = require('sequelize');
var models = require('../models');
const Formatter = require('./formatter');
const format = new Formatter();

class PersonasService {
  async listAllPersonas() {
    try {
      const Personas = await models.Personas.findAll({
        include: [{ all: true }]
      });
      console.log('✅ Personas were found');
      return format.Personas(Personas);
    } catch (err) {
      console.error('🛑 Error when fetching Personas', err);
      throw err;
    }
  }

  async mejoresEmpleados() {
    try {
      const Personas = await models.Personas.findAll({
        include: [{ all: true }],
        where: { tipoPersonaId: 2 }
      });
      console.log('✅ Personas were found');
      let data = await format.mejoresEmpleados(Personas);
      return data

    } catch (err) {
      console.error('🛑 Error when fetching Personas', err);
      throw err;
    }
  }

  async listAllEmpleados() {
    try {
      const Personas = await models.Personas.findAll({
        include: [{ all: true }]
      });
      console.log('✅ Personas were found');
      let data = await format.Personas(Personas);
      
      return data.filter((item) => item.tipoPersona === 'Empleado');
    } catch (err) {
      console.error('🛑 Error when fetching Personas', err);
      throw err;
    }
  }

  async listAllProveedores() {
    try {
      const Personas = await models.Personas.findAll({
        include: [{ all: true }]
      });
      console.log('✅ Personas were found');
      let data = await format.Personas(Personas);
      
      return data.filter((item) => item.tipoPersona === 'Proveedor');
    } catch (err) {
      console.error('🛑 Error when fetching Personas', err);
      throw err;
    }
  }

  async listAllClientes() {
    try {
      const Personas = await models.Personas.findAll({
        include: [{ all: true }],
        where: { tipoPersonaId: 3 }
      });
      console.log('✅ Personas were found');
      let data = await format.Personas(Personas);
      
      return data
    } catch (err) {
      console.error('🛑 Error when fetching Personas', err);
      throw err;
    }
  }

  async mejoresClientes() {
    try {
      const mejoresClientes = await models.Personas.findAll({
        include: [{ all: true }],
        where: { tipoPersonaId: 3 }
      });
      console.log('✅ Personas were found');
      let data = await format.mejoresClientes(mejoresClientes);
      
      return data
    } catch (err) {
      console.error('🛑 Error when fetching Personas', err);
      throw err;
    }
  }

  

  async listOnePersonas(Personas_id) {
    try {
      const onePersonas = await models.Personas.findByPk(Personas_id,{
        include: [{ all: true }]
      }
      );
      if (!onePersonas) {
        return null;
      }
      return format.Persona(onePersonas);
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async createPersonas(DataPersonas) {
    try {
      const newPersonas = await models.Personas.create(DataPersonas);
      return newPersonas;
    } catch (err) {
      console.error('🛑 Error when creating Personas', err);
      throw err;
    }
  }

  async updatePersonas(Personas_id, dataUpdated) {
    try {
      const oldPersonas = await models.Personas.findByPk(Personas_id);
      if (!oldPersonas) {
        return null;
      }

      let newPersonas = await oldPersonas.update(dataUpdated);
      return newPersonas;
    } catch (err) {
      console.error('🛑 Error when updating Personas', err);
      throw err;
    }
  }

  async deletePersonas(Personas_id) {
    try {
      const deletedPersonas = await models.Personas.findByPk(Personas_id);
      if (!deletedPersonas) {
        return null;
      }
      await models.Personas.destroy({ where: { id: Personas_id } });
      return deletedPersonas;
    } catch (err) {
      console.error('🛑 Error when deleting Personas', err);
      throw err;
    }
  }
}

module.exports = PersonasService;