const { where } = require('sequelize');
var models = require('../models');
const Formatter = require('./formatter');
const format = new Formatter();
const stockService = require('./stock');
const StockService = new stockService();

class MovimientosService {
  async listAllMovimientos() {
    try {
      const Ventas = await models.Movimientos.findAll({
        include: [{ all: true }]
      });
      console.log('✅ Ventas were found');
      return Ventas
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }

  async listAllVentas() {
    try {
      const Ventas = await models.Movimientos.findAll({
        include: [{ all: true }]
      });
      console.log('✅ Ventas were found');
      let data = await format.Ventas(Ventas);

      return data
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }

  async listAllProveedores() {
    try {
      const Ventas = await models.Movimientos.findAll({
        include: [{ all: true }]
      });
      console.log('✅ Ventas were found');
      let data = await format.Ventas(Ventas);
      
      return data.filter((item) => item.tipoPersona === 'Proveedor');
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }

  

  async listOneMovimientos(Ventas_id) {
    try {
      const oneVentas = await models.Movimientos.findByPk(Ventas_id);
      if (!oneVentas) {
        return null;
      }
      return oneVentas
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async createMovimientos(DataVentas) {
    try {
      let subtotal = await this.getTotalPrice(DataVentas.productos)
      
      const movimiento = await models.Movimientos.create({
        subtotal: subtotal,
        tipoMovimientoId: DataVentas.tipoMovimientoId,
        personaId: DataVentas.personaId,
        usuarioId: DataVentas.usuarioId
      });

      for(const producto of DataVentas.productos){
        await models.StockMoviminetos.create({
          stockId: producto.id,
          cantidad: producto.cantidad,
          movimientosId: movimiento.id
        })
      }


      return movimiento;
    } catch (err) {
      console.error('🛑 Error when creating Ventas', err);
      throw err;
    }
  }

  async updateMovimientos(Ventas_id, dataUpdated) {
    try {
      const oldVentas = await models.Movimientos.findByPk(Ventas_id);
      if (!oldVentas) {
        return null;
      }

      let newVentas = await oldVentas.update(dataUpdated);
      return newVentas;
    } catch (err) {
      console.error('🛑 Error when updating Ventas', err);
      throw err;
    }
  }

  async deleteMovimientos(Ventas_id) {
    try {
      const deletedVentas = await models.Movimientos.findByPk(Ventas_id);
      if (!deletedVentas) {
        return null;
      }
      await models.Movimientos.destroy({ where: { id: Ventas_id } });
      return deletedVentas;
    } catch (err) {
      console.error('🛑 Error when deleting Ventas', err);
      throw err;
    }
  }


  async getTotalPrice(productos) {
    try {
      let subtotal = 0;
  
     
      for (const producto of productos) {
       
        const articuloEnStock = await StockService.listOneStock(producto.id); 
  
        if (articuloEnStock) {
          const costoTotal = articuloEnStock.costo * producto.cantidad;
          subtotal += costoTotal;
        } else {
          throw new Error(`No se encontró el artículo con id ${producto.id} en el stock.`);
        }
      }
  
      return subtotal;
    } catch (err) {
      console.error('🛑 Error al calcular el subtotal de la lista de productos', err);
      throw err;
    }
  }
}

module.exports = MovimientosService;