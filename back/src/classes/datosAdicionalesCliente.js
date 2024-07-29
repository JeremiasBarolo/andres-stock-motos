var models = require('../models');
const Formatter = require('./formatter');
const format = new Formatter();
const UtilsService = require('./utils');
const utilsService = new UtilsService();


class DatosAdicionalesClienteService {
  async listAllDatosAdicionalesCliente() {
    try {
      const DatosAdicionalesCliente = await models.DatosAdicionalesCliente.findAll({
        include: [{ all: true }]
      });
      console.log('✅ DatosAdicionalesCliente were found');
      return format.DatosAdicionalesCliente(DatosAdicionalesCliente);
    } catch (err) {
      console.error('🛑 Error when fetching DatosAdicionalesCliente', err);
      throw err;
    }
  }

  
  async listOneDatosAdicionalesCliente(DatosAdicionalesCliente_id) {
    try {
      const oneDatosAdicionalesCliente = await models.DatosAdicionalesCliente.findByPk(DatosAdicionalesCliente_id);
      if (!oneDatosAdicionalesCliente) {
        return null;
      }
      return format.DatosAdicionalesCliente(oneDatosAdicionalesCliente);
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async createDatosAdicionalesCliente(DataDatosAdicionalesCliente) {
    try {

      const newDatosAdicionalesCliente = await models.DatosAdicionalesCliente.create(DataDatosAdicionalesCliente);
      return newDatosAdicionalesCliente;
    } catch (err) {
      console.error('🛑 Error when creating DatosAdicionalesCliente', err);
      throw err;
    }
  }


  async updateDatosAdicionalesCliente(DatosAdicionalesCliente_id, dataUpdated) {
    try {
      const oldDatosAdicionalesCliente = await models.Movimientos.findByPk(DatosAdicionalesCliente_id,
        { include: [{ all: true }] }
      );
      if (!oldDatosAdicionalesCliente) {
        return null;
      }

      await oldDatosAdicionalesCliente.update(dataUpdated);
      return true;

    } catch (err) {
      console.error('🛑 Error when updating DatosAdicionalesCliente', err);
      throw err;
    }
  }

  async deleteDatosAdicionalesCliente(DatosAdicionalesCliente_id) {
    try {
      const deletedDatosAdicionalesCliente = await models.DatosAdicionalesCliente.findByPk(DatosAdicionalesCliente_id);
      if (!deletedDatosAdicionalesCliente) {
        return null;
      }
      await models.DatosAdicionalesCliente.destroy({ where: { id: DatosAdicionalesCliente_id } });
      return deletedDatosAdicionalesCliente;
    } catch (err) {
      console.error('🛑 Error when deleting DatosAdicionalesCliente', err);
      throw err;
    }
  }

  

 
}

module.exports = DatosAdicionalesClienteService;