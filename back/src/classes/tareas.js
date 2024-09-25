var models = require('../models');
const bcrypt = require('bcrypt');
const Formatter = require('./formatter');
const format = new Formatter();
const { Op } = require('sequelize');



class TareasService {
  async listAllTareas() {
    try {
      const Tareas = await models.Tareas.findAll({
        include: [
          {
            model: models.Usuarios,
            include: [
              {
                model: models.Personas,
               
                
              }
            ]
          }
        ]
      });
      console.log('✅ Tareas were found');
      let data = format.Tareas(Tareas);
      return data
    } catch (err) {
      console.error('🛑 Error when fetching Tareas', err);
      throw err;
    }
  }

  async countHome() {
    try {
      const Tareas = await models.Tareas.findAll({
        where: {
          estado: {
            [Op.ne]: 'Completada'  
          }
        }
      });
      console.log('✅ Tareas were found');
      
      return Tareas.length
    } catch (err) {
      console.error('🛑 Error when fetching Tareas', err);
      throw err;
    }
  }

  async listOneTareas(Tareas_id) {
    try {
      const oneTareas = await models.Tareas.findByPk(Tareas_id);
      if (!oneTareas) {
        return null;
      }
      return oneTareas;
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async listTareasEmpleado(usuarioId) {
    try {
        const oneTareas = await models.Tareas.findAll({
            where: { usuarioId: usuarioId },
            include: [
                {
                    model: models.Usuarios,
                    include: [
                        {
                            model: models.Personas,
                        }
                    ]
                }
            ]
        });

        if (!oneTareas) {
            return null;
        }

        return format.Tareas(oneTareas);
    } catch (err) {
        throw err;
    }
}


  async createTareas(DataTareas) {
    try {
      const newTareas = await models.Tareas.create(DataTareas);
      
      return newTareas;
    } catch (err) {
      console.error('🛑 Error when creating Tareas', err);
      throw err;
    }
  }

  async updateTareas(Tareas_id, dataUpdated) {
    try {
      const oldTareas = await models.Tareas.findByPk(Tareas_id);
      if (!oldTareas) {
        return null;
      }
      let newTareas = await oldTareas.update(dataUpdated);
      return newTareas;
    } catch (err) {
      console.error('🛑 Error when updating Tareas', err);
      throw err;
    }
  }

  async updatePassword(Tareas_id, dataUpdated) {
    try {
      const oldTareas = await models.Tareas.findByPk(Tareas_id);
      if (!oldTareas) {
        return null;
      }

      const hashedPassword = await bcrypt.hash(dataUpdated.newPassword, 10);
      let newTareas = await oldTareas.update({...oldTareas, password:hashedPassword });
      return newTareas;
    } catch (err) {
      console.error('🛑 Error when updating Tareas', err);
      throw err;
    }
  }

  async deleteTareas(Tareas_id) {
    try {
      const deletedTareas = await models.Tareas.findByPk(Tareas_id);
      if (!deletedTareas) {
        return null;
      }
      await models.Tareas.destroy({ where: { id: Tareas_id } });
      return deletedTareas;
    } catch (err) {
      console.error('🛑 Error when deleting Tareas', err);
      throw err;
    }
  }
}

module.exports = TareasService;