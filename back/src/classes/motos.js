const { where } = require('sequelize');
var models = require('../models');
const Formatter = require('./formatter');
const format = new Formatter();

class MotosService {
  async listAllMotos() {
    try {
      const Motos = await models.Motos.findAll({
        include: [{ all: true }]
      });
      console.log('✅ Motos were found');
      return format.Motos(Motos);
    } catch (err) {
      console.error('🛑 Error when fetching Motos', err);
      throw err;
    }
  }

  async listAllMotosUsadas() {
    try {
      const Motos = await models.Motos.findAll({
        include: [{ all: true }],
        where: { tipoMotoId: 1 }
      });
      console.log('✅ Motos were found');
      let data = await format.Motos(Motos);
      
      return data
    } catch (err) {
      console.error('🛑 Error when fetching Motos', err);
      throw err;
    }
  }

  async listAllMotosConsignacion() {
    try {
      const Motos = await models.Motos.findAll({
        include: [{ all: true }],
        where: { tipoMotoId: 3 }
      });
      console.log('✅ Motos were found');
      let data = await format.Motos(Motos);
      
      return data
    } catch (err) {
      console.error('🛑 Error when fetching Motos', err);
      throw err;
    }
  }

  async listAllMotosNuevas() {
    try {
      const Motos = await models.Motos.findAll({
        include: [{ all: true }]
      });
      console.log('✅ Motos were found');
      let data = await format.Motos(Motos);
      
      return data.filter((item) => item.tipoMotoId === 2);
    } catch (err) {
      console.error('🛑 Error when fetching Motos', err);
      throw err;
    }
  }

  async listOneMotos(Motos_id) {
    try {
      const oneMotos = await models.Motos.findByPk(Motos_id);
      if (!oneMotos) {
        return null;
      }
      return format.Motos(oneMotos);
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async createMotos(DataMotos) {
    try {
      const newMotos = await models.Motos.create(DataMotos);
      return newMotos;
    } catch (err) {
      console.error('🛑 Error when creating Motos', err);
      throw err;
    }
  }

  async updateMotos(Motos_id, dataUpdated) {
    try {
      const oldMotos = await models.Motos.findByPk(Motos_id);
      if (!oldMotos) {
        return null;
      }

      let newMotos = await oldMotos.update(dataUpdated);
      return newMotos;
    } catch (err) {
      console.error('🛑 Error when updating Motos', err);
      throw err;
    }
  }

  async deleteMotos(Motos_id) {
    try {
      const deletedMotos = await models.Motos.findByPk(Motos_id);
      if (!deletedMotos) {
        return null;
      }
      await models.Motos.destroy({ where: { id: Motos_id } });
      return deletedMotos;
    } catch (err) {
      console.error('🛑 Error when deleting Motos', err);
      throw err;
    }
  }
}

module.exports = MotosService;