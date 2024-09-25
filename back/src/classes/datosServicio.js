var models = require('../models');
const Formatter = require('./formatter');
const format = new Formatter();
const UtilsService = require('./utils');
const utilsService = new UtilsService();


class DatosServicioService {
  async listAllDatosServicio() {
    try {
      const DatosServicio = await models.DatosServicio.findAll({
        include: [{ all: true }]
      });
      console.log('✅ DatosServicio were found');
      return format.DatosServicio(DatosServicio);
    } catch (err) {
      console.error('🛑 Error when fetching DatosServicio', err);
      throw err;
    }
  }

  
  async listOneDatosServicio(DatosServicio_id) {
    try {
      const oneDatosServicio = await models.DatosServicio.findByPk(DatosServicio_id);
      if (!oneDatosServicio) {
        return null;
      }
      return format.DatosServicio(oneDatosServicio);
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async createDatosServicio(DataDatosServicio) {
    try {
      
      let subtotal = await utilsService.calcularSubtotalDatosServicios(DataDatosServicio.productos);
      let checklist = DataDatosServicio.checklist

      const newDatosServicio = await models.DatosServicio.create(DataDatosServicio);

      const movimiento = await models.Movimientos.create({
        usuarioId: DataDatosServicio.usuarioId,
        personaId: DataDatosServicio.personaId,
        subtotal: subtotal,
        tipoMovimientoId: 4,
        datosServiciosId: newDatosServicio.id
      });

      for(const servicio of DataDatosServicio.productos){
        await models.StockMoviminetos.create({
          stockId: servicio.id,
          cantidad: 1,
          movimientosId: movimiento.id
        })
      }

      for(const servicio of checklist){
        await models.ServicioChecklist.create({
          datosServicioId: newDatosServicio.id,
          checklistId: servicio.id,
        })
      }


      return newDatosServicio;
    } catch (err) {
      console.error('🛑 Error when creating DatosServicio', err);
      throw err;
    }
  }

  async updateDatosServicio(DatosServicio_id, dataUpdated) {
    try {
      const oldDatosServicio = await models.Movimientos.findByPk(DatosServicio_id,
        { include: [{ all: true }] }
      );
      if (!oldDatosServicio) {
        return null;
      }


  
    let oldStock = oldDatosServicio.Stocks;
    let newStock = dataUpdated.productos;
    
    // logica de cantidades
    await utilsService.updateDatosServicioLogica(oldStock, newStock, DatosServicio_id, dataUpdated)  


    // creacion de checklist
    await utilsService.checklistLogica(oldDatosServicio.DatosServicio.id, dataUpdated.checklist)



      let subtotal = await utilsService.calcularSubtotalDatosServicios(dataUpdated.productos)

      let newVentas = await oldDatosServicio.update({...dataUpdated, subtotal: subtotal});
      return newVentas;

    } catch (err) {
      console.error('🛑 Error when updating DatosServicio', err);
      throw err;
    }
  }

  async updateInsumos(DatosServicio_id, dataUpdated) {
    try {
      const oldDatosServicio = await models.Movimientos.findByPk(DatosServicio_id,
        { include: [{ all: true }] }
      );
      if (!oldDatosServicio) {
        return null;
      }

      let oldStock = oldDatosServicio.Stocks.filter(item => item.tipoId !== 3);
      let newStock = dataUpdated;
      
      await utilsService.stockLogica(oldStock, newStock, DatosServicio_id, oldDatosServicio, dataUpdated)

      const subtotal = await utilsService.getTotalPrice(dataUpdated)
      await oldDatosServicio.update({subtotal: subtotal});
      return true;

    } catch (err) {
      console.error('🛑 Error when updating DatosServicio', err);
      throw err;
    }
  }

  async deleteDatosServicio(DatosServicio_id) {
    try {
      const deletedDatosServicio = await models.DatosServicio.findByPk(DatosServicio_id);
      if (!deletedDatosServicio) {
        return null;
      }
      await models.DatosServicio.destroy({ where: { id: DatosServicio_id } });
      return deletedDatosServicio;
    } catch (err) {
      console.error('🛑 Error when deleting DatosServicio', err);
      throw err;
    }
  }

  

 
}

module.exports = DatosServicioService;