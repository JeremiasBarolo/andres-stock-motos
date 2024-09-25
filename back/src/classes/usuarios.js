var models = require('../models');
const bcrypt = require('bcrypt');
const Formatter = require('./formatter');
const format = new Formatter();

class UsuariosService {
  async listAllUsuarios() {
    try {
      const Usuarios = await models.Usuarios.findAll({
        include: [{ all: true }]
      });
      console.log('✅ Usuarios were found');
      return format.usuarios(Usuarios);
    } catch (err) {
      console.error('🛑 Error when fetching Usuarios', err);
      throw err;
    }
  }

  async listOneUsuarios(Usuarios_id) {
    try {
      const oneUsuarios = await models.Usuarios.findByPk(Usuarios_id);
      if (!oneUsuarios) {
        return null;
      }
      return oneUsuarios;
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async createUsuarios(DataUsuarios) {
    try {
      const hashedPassword = await bcrypt.hash(DataUsuarios.password, 10); 
    
      let user = {
          user: DataUsuarios.user,
          password: hashedPassword, 
          rolId: DataUsuarios.rolId,
          personaId: DataUsuarios.personaId
      };
      
      const newusuarios = await models.Usuarios.create(user);
      
      return newusuarios;
    } catch (err) {
      console.error('🛑 Error when creating Usuarios', err);
      throw err;
    }
  }

  async updateUsuarios(Usuarios_id, dataUpdated) {
    try {
      const oldUsuarios = await models.Usuarios.findByPk(Usuarios_id);
      if (!oldUsuarios) {
        return null;
      }
      let newUsuarios = await oldUsuarios.update(dataUpdated);
      return newUsuarios;
    } catch (err) {
      console.error('🛑 Error when updating Usuarios', err);
      throw err;
    }
  }

  async updatePassword(Usuarios_id, dataUpdated) {
    try {
      const oldUsuarios = await models.Usuarios.findByPk(Usuarios_id);
      if (!oldUsuarios) {
        return null;
      }

      const hashedPassword = await bcrypt.hash(dataUpdated.newPassword, 10);
      let newUsuarios = await oldUsuarios.update({...oldUsuarios, password:hashedPassword });
      return newUsuarios;
    } catch (err) {
      console.error('🛑 Error when updating Usuarios', err);
      throw err;
    }
  }

  async deleteUsuarios(Usuarios_id) {
    try {
      const deletedUsuarios = await models.Usuarios.findByPk(Usuarios_id);
      if (!deletedUsuarios) {
        return null;
      }
      await models.Usuarios.destroy({ where: { id: Usuarios_id } });
      return deletedUsuarios;
    } catch (err) {
      console.error('🛑 Error when deleting Usuarios', err);
      throw err;
    }
  }
}

module.exports = UsuariosService;