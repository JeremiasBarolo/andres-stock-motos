const { where } = require('sequelize');
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
      const oneDatosAdicionalesCliente = await models.DatosAdicionalesCliente.findOne({
        where: {clienteId:DatosAdicionalesCliente_id}}
      );
      if (!oneDatosAdicionalesCliente) {
        return null;
      }
      return oneDatosAdicionalesCliente
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async createDatosAdicionalesCliente(DataDatosAdicionalesCliente) {
    try {
      
      const cleanedData = {
        telComercial: DataDatosAdicionalesCliente.telComercial || null,
        estadoCivil: DataDatosAdicionalesCliente.estadoCivil || null,
        empActual: DataDatosAdicionalesCliente.empActual || null,
        domicilioEmp: DataDatosAdicionalesCliente.domicilioEmp || null,
        telEmp: DataDatosAdicionalesCliente.telEmp || null,
        profesion: DataDatosAdicionalesCliente.profesion || null,
        fechaIngreso: DataDatosAdicionalesCliente.fechaIngreso || null,
        ingresosMensuales: DataDatosAdicionalesCliente.ingresosMensuales || null,
        nombreConyugue: DataDatosAdicionalesCliente.nombreConyugue || null,
        trabaja: DataDatosAdicionalesCliente.trabaja || null,
        dondeTrabaja: DataDatosAdicionalesCliente.dondeTrabaja || null,
        dniConyugue: DataDatosAdicionalesCliente.dniConyugue || null,
        razonSocial: DataDatosAdicionalesCliente.razonSocial || null,
        ramoDeActividad: DataDatosAdicionalesCliente.ramoDeActividad || null,
        cuitJuridico: DataDatosAdicionalesCliente.cuitJuridico || null,
        ivaJuridico: DataDatosAdicionalesCliente.ivaJuridico || null,
        ventasMensuales: DataDatosAdicionalesCliente.ventasMensuales || null,
        domicilioJuridico: DataDatosAdicionalesCliente.domicilioJuridico || null,
        telefonoJuridico: DataDatosAdicionalesCliente.telefonoJuridico || null,
        telefax: DataDatosAdicionalesCliente.telefax || null,
        telGarante: DataDatosAdicionalesCliente.telGarante || null,
        nombreGarante: DataDatosAdicionalesCliente.nombreGarante || null,
        domicilioGarante: DataDatosAdicionalesCliente.domicilioGarante || null,
        cuitGarante: DataDatosAdicionalesCliente.cuitGarante || null,
        direccionEmpGarante: DataDatosAdicionalesCliente.direccionEmpGarante || null,
        casaPropiaAlquilada: DataDatosAdicionalesCliente.casaPropiaAlquilada || null,
        edadGarante: DataDatosAdicionalesCliente.edadGarante || null,
        estadoCivilGarante: DataDatosAdicionalesCliente.estadoCivilGarante || null,
      };
  
      if (DataDatosAdicionalesCliente.clienteId) {
        const newDatosAdicionalesCliente = await models.DatosAdicionalesCliente.create({...cleanedData, clienteId:DataDatosAdicionalesCliente.clienteId });
        return newDatosAdicionalesCliente;
      }
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