var models = require('../models');
const Formatter = require('./formatter');
const format = new Formatter();

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
      
      let subtotal = await this.calcularSubtotal(DataDatosServicio.productos);

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


      return newDatosServicio;
    } catch (err) {
      console.error('🛑 Error when creating DatosServicio', err);
      throw err;
    }
  }

  async updateDatosServicio(DatosServicio_id, dataUpdated) {
    try {
      const oldDatosServicio = await models.DatosServicio.findByPk(DatosServicio_id);
      if (!oldDatosServicio) {
        return null;
      }

      let newDatosServicio = await oldDatosServicio.update(dataUpdated);
      return newDatosServicio;
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

  async calcularSubtotal(DataDatosServicio) {
    return DataDatosServicio.reduce((subtotal, producto) => {
      return subtotal + (producto.costo); 
    }, 0);
  }
}

module.exports = DatosServicioService;