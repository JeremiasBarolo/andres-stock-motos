const { where } = require('sequelize');
var models = require('../models');
const Formatter = require('./formatter');
const format = new Formatter();
const UtilsService = require('./utils');
const utilsService = new UtilsService();


class OperacionVentaMotosService {
  async listAllOperacionVentaMotos() {
    try {
      const OperacionVentaMotos = await models.OperacionVentaMotos.findAll({
        include: [{ all: true }]
      });
      console.log('✅ OperacionVentaMotos were found');
      return format.OperacionVentaMotos(OperacionVentaMotos);
    } catch (err) {
      console.error('🛑 Error when fetching OperacionVentaMotos', err);
      throw err;
    }
  }

  
  async listOneOperacionVentaMotos(OperacionVentaMotos_id) {
    try {
      const oneOperacionVentaMotos = await models.OperacionVentaMotos.findOne({
        where: {clienteId:OperacionVentaMotos_id}}
      );
      if (!oneOperacionVentaMotos) {
        return null;
      }
      return oneOperacionVentaMotos
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async createOperacionVentaMotos(DataOperacionVentaMotos) {
    try {
      
      const cleanedData = {
        precioOperacion: DataOperacionVentaMotos.precioOperacion || null,
        seniaOperacion: DataOperacionVentaMotos.señaOperacion || null,
        entregaOperacion: DataOperacionVentaMotos.entregaOperacion || null,
        otrasEntOperacion: DataOperacionVentaMotos.otrasEntOperacion || null,
        observacionOperacion: DataOperacionVentaMotos.observacionOperacion || null,
        cuotas: DataOperacionVentaMotos.cuotas || null,
        valorCuota: DataOperacionVentaMotos.valorCuota || null,
        diaVencimientoCuota: DataOperacionVentaMotos.diaVencimientoCuota || null,
        diaInicioCuota: DataOperacionVentaMotos.diaInicioCuota || null,
        mesInicioCuota: DataOperacionVentaMotos.mesInicioCuota || null,
        anioInicioCuota: DataOperacionVentaMotos.anioInicioCuota || null,
        diaFinalCuota: DataOperacionVentaMotos.diaFinalCuota || null,
        mesFinalCuota: DataOperacionVentaMotos.mesFinalCuota || null,
        anioFinalCuota: DataOperacionVentaMotos.anioFinalCuota || null,
        lugarPago: DataOperacionVentaMotos.lugarPago || null,
        gastosPap: DataOperacionVentaMotos.gastosPap || null,
        prenda: DataOperacionVentaMotos.prenda || null,
        inscripcion: DataOperacionVentaMotos.inscripcion || null,
        pago: DataOperacionVentaMotos.pago || null,
        fechaRealizacion: DataOperacionVentaMotos.fechaRealizacion || null,
        conceptoFinal: DataOperacionVentaMotos.conceptoFinal || null
      };
  
      if (DataOperacionVentaMotos.movimientoId) {
        const newOperacionVentaMotos = await models.OperacionVentaMotos.create({...cleanedData, movimientoId:DataOperacionVentaMotos.movimientoId });
        return newOperacionVentaMotos;
      }
    } catch (err) {
      console.error('🛑 Error when creating OperacionVentaMotos', err);
      throw err;
    }
  }
  


  async updateOperacionVentaMotos(OperacionVentaMotos_id, dataUpdated) {
    try {
      const oldOperacionVentaMotos = await models.Movimientos.findByPk(OperacionVentaMotos_id,
        { include: [{ all: true }] }
      );
      if (!oldOperacionVentaMotos) {
        return null;
      }

      await oldOperacionVentaMotos.update(dataUpdated);
      return true;

    } catch (err) {
      console.error('🛑 Error when updating OperacionVentaMotos', err);
      throw err;
    }
  }

  async deleteOperacionVentaMotos(OperacionVentaMotos_id) {
    try {
      const deletedOperacionVentaMotos = await models.OperacionVentaMotos.findByPk(OperacionVentaMotos_id);
      if (!deletedOperacionVentaMotos) {
        return null;
      }
      await models.OperacionVentaMotos.destroy({ where: { id: OperacionVentaMotos_id } });
      return deletedOperacionVentaMotos;
    } catch (err) {
      console.error('🛑 Error when deleting OperacionVentaMotos', err);
      throw err;
    }
  }

  

 
}

module.exports = OperacionVentaMotosService;