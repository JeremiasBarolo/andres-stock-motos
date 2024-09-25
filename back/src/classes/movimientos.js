const { where } = require('sequelize');
var models = require('../models');
const Formatter = require('./formatter');
const format = new Formatter();
const stockService = require('./stock');
const StockService = new stockService();
const UtilsService = require('./utils');
const utilsService = new UtilsService();
const { Op } = require('sequelize');

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

  async listAllRecaudacion() {
    try {
      const Ventas = await models.Movimientos.findAll({
        include: [{ all: true }],
        where: {
          tipoMovimientoId: {
            [Op.or]: [2, 3, 4, 5]
          }
        }
      });
      
     
    const totalRecaudacion = Ventas.reduce((total, venta) => {
      return total + venta.subtotal; 
    }, 0);

    return {recaudacion: totalRecaudacion, cantidad: Ventas.length} ;
  } catch (err) {
    console.error('🛑 Error when fetching Ventas', err);
    throw err;
  }
}

  

  async listAllVentasRepuestos() {
    try {
      const Ventas = await models.Movimientos.findAll({
        include: [{ all: true }],
        where:{
          tipoMovimientoId: 3
        }
        
      });
      console.log('✅ Ventas were found');
      let data = await format.Ventas(Ventas);

      return data
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }

  async listAllVentasAccesesorios() {
    try {
      const Ventas = await models.Movimientos.findAll({
        where:{
          tipoMovimientoId: 5
        },
        include: [{ all: true }],
        
        
      });
      console.log('✅ Ventas were found');
      let data = await format.Ventas(Ventas);

      return data
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }

  async listAllVentasPorCategoria() {
    try {
      const VentasMotos = await models.Movimientos.findAll({
        include: [{ all: true }],
        where:{
          tipoMovimientoId: 2
        }
        
      });

      const VentasGenerales = await models.Stock.findAll({
        include: [{ all: true }],
        where: {
          tipoId: {
            [Op.or]: [1,2,4]
          }
        }
      });


      console.log('✅ Ventas were found');
      let dataMotos = await format.VentasMotoPorCategoria(VentasMotos);
      let dataGenerales = await format.VentasGeneralPorCategoria(VentasGenerales);

      let motos = await utilsService.cantidadesAcumuladasStock(dataMotos)
      let general = await utilsService.cantidadesAcumuladasStock(dataGenerales)

      return [...motos , ...general]
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }

  async listAllRelaciones(id) {
    try {
      const Ventas = await models.StockMoviminetos.findAll({
        where: { movimientosId: id },
        include: [{ all: true }]
      });
      return Ventas
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }

  async listHistorial() {
    try {
      const Ventas = await models.Movimientos.findAll({
        include: [{ all: true }]
      });
      console.log('✅ Ventas were found');
      let data = await format.Historial(Ventas);

      return data
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }


  async listPrecios() {
    try {
      const Stock = await models.Stock.findAll({
        include: [{ all: true }]
      });

      const Motos = await models.Motos.findAll({
        include: [{ all: true }]
      });

      let stock = await format.ListPreciosStock(Stock);
      let motos = await format.ListPreciosMotos(Motos);


      let mergedArray = [...stock, ...motos];

      return mergedArray
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }

  async listAllMotosMovimientos() {
    try {
      const Ventas = await models.Movimientos.findAll({
        where: { tipoMovimientoId: 2 },
        include: [
          { all: true },
          {
            model: models.Motos,
            include: [
              {
                model: models.Marca
              }
            ]
          }
        ],
        
        
      });
      console.log('✅ Ventas were found');
      let data = await format.MotosVenta(Ventas.filter((item) => item.tipoMovimientoId === 2));

      return data
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }

  async listAllServices() {
    try {
      const Service = await models.Movimientos.findAll({
        where: { tipoMovimientoId: 4 },
        include: [{ all: true }],
        include: [
          { all: true },
          {
            model: models.DatosServicio,
            include: [
                { all: true },
            ]
          },
          {
            model: models.Stock,
            include: [
                { all: true },
            ]
          },

            

        ],
      });

    
      console.log('✅ Ventas were found');
      let data = await format.Service(Service);
      
      return data.filter((item) => item.TipoMovimiento === 'Servicio');
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }

  async listOneVentas(id) {
    try {
      const Ventas = await models.Movimientos.findByPk(id,{
        include: [{ all: true }]
      });
      console.log('✅ Ventas were found');
      let data = format.OneVentas(Ventas);

      return data
    } catch (err) {
      console.error('🛑 Error when fetching Ventas', err);
      throw err;
    }
  }

  

  async listOneMovimientos(Ventas_id) {
    try {
      const oneVentas = await models.Movimientos.findByPk(Ventas_id,{
        include: [{ all: true }],
        include: [
          { all: true },
          {
            model: models.DatosServicio,
            include: [
                { all: true },
            ]
          },
          {
            model: models.Stock,
            include: [
                { all: true },
            ]
          },

            

        ],
      }
      );
      if (!oneVentas) {
        return null;
      }
      let data = format.OneService(oneVentas);
      return data
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async createMovimientos(DataVentas) {
    try {
      let subtotal = await utilsService.getTotalPrice(DataVentas.productos)
      
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

        let stock = await models.Stock.findByPk(producto.id)
        await stock.update({
          cantidad: stock.cantidad - parseInt(producto.cantidad, 10)
        })
      }



      return movimiento;
    } catch (err) {
      console.error('🛑 Error when creating Ventas', err);
      throw err;
    }
  }

  async createVentaMoto(DataVentas) {
    try {

        let subtotal = await models.Motos.findByPk(DataVentas.motoId)

      
        await models.Movimientos.create({
          subtotal: subtotal.precio,
          tipoMovimientoId: DataVentas.tipoMovimientoId,
          personaId: DataVentas.personaId,
          usuarioId: DataVentas.usuarioId,
          motoId: DataVentas.motoId
        });
      
      


      return true;
    } catch (err) {
      console.error('🛑 Error when creating Ventas', err);
      throw err;
    }
  }

  async updateMovimientos(Ventas_id, dataUpdated) {
    try {
        const oneVentas = await models.Movimientos.findByPk(Ventas_id, {
          include: [{ all: true }]
        });
  
        if (!oneVentas) {
          return null;
        }
        let newVentas = await oneVentas.update(dataUpdated);
        return newVentas;
      
  
    } catch (err) {
      console.error('🛑 Error when updating Ventas', err);
      throw err;
    }
  }

  async updateVentaMotos(Ventas_id, dataUpdated) {
    try {
        const oneVentas = await models.Movimientos.findByPk(Ventas_id, {
          include: [{ all: true }]
        });
  
        if (!oneVentas) {
          return null;
        }

        let subtotal = await models.Motos.findByPk(dataUpdated.motoId)

        await oneVentas.update({
          subtotal: subtotal.precio,
          tipoMovimientoId: dataUpdated.tipoMovimientoId,
          personaId: dataUpdated.personaId,
          usuarioId: dataUpdated.usuarioId,
          motoId: dataUpdated.motoId
        });
        
        let newVentas = await oneVentas.update(dataUpdated);
        return newVentas;
      
  
    } catch (err) {
      console.error('🛑 Error when updating Ventas', err);
      throw err;
    }
  }

  async updateVentaRepuestos(Ventas_id, dataUpdated) {
    try {
      const oneVentas = await models.Movimientos.findByPk(Ventas_id, {
        include: [{ all: true }]
      });

      if (!oneVentas) {
        return null;
      }

      
      let oldStock = oneVentas.Stocks;
      let newStock = dataUpdated.productos;
      let toAdd = [];
      let toUpdate = [];
      let toDelete = [];

      
      let oldStockMap = new Map();
      oldStock.forEach(item => {
        oldStockMap.set(item.id, item.cantidad);
      });

      
      

      
      newStock.forEach(newItem => {
        if (oldStockMap.has(newItem.id)) {
          if (oldStockMap.get(newItem.id) !== newItem.cantidad) {
            toUpdate.push(newItem);
          }
          oldStockMap.delete(newItem.id); 
        } else {
          toAdd.push(newItem);
        }
      });

      
      toDelete = Array.from(oldStockMap.keys());

      
      for (let item of toUpdate) {
       
      let stock = await models.Stock.findByPk(item.id);

      
      let movimientoAnterior = await models.StockMoviminetos.findOne({
        where: { stockId: item.id, movimientosId: Ventas_id },
      });
      
      movimientoAnterior = movimientoAnterior ? parseInt(movimientoAnterior.cantidad, 10) : 0;
      let nuevaCantidad = parseInt(item.cantidad, 10);

      
      if (nuevaCantidad > movimientoAnterior) {
        let diferencia = nuevaCantidad - movimientoAnterior;
        await stock.update({
          cantidad: stock.cantidad - diferencia
        });
      }
      
      else if (nuevaCantidad < movimientoAnterior) {
        let diferencia = movimientoAnterior - nuevaCantidad;
        await stock.update({
          cantidad: stock.cantidad + diferencia
        });
      }

      await models.StockMoviminetos.update(
        { cantidad: item.cantidad },
        { where: { stockId: item.id, movimientosId: Ventas_id } }
      );
    }

      
      for (let id of toDelete) {
        let Movimiento = await models.StockMoviminetos.findOne({
          where: { stockId: id, movimientosId: Ventas_id },
        });

        let stock = await models.Stock.findByPk(id);

        await stock.update({
          cantidad: stock.cantidad + Movimiento.cantidad
        });

        await Movimiento.destroy();
      }

      
      for (let item of toAdd) {
        await models.StockMoviminetos.create({
          stockId: item.id,
          movimientosId: Ventas_id,
          cantidad: item.cantidad
        });
      }

      let subtotal = await utilsService.getTotalPrice(dataUpdated.productos)

      let newVentas = await oneVentas.update({...dataUpdated, subtotal: subtotal});
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

  async deleteVentaRespuestos(Ventas_id) {
    try {
      const deletedVentas = await models.Movimientos.findByPk(Ventas_id);
      if (!deletedVentas) {
        return null;
      }
      let stock = await models.StockMoviminetos.findAll({
        where: { movimientosId: Ventas_id },
      });

      for(let item of stock){
        let stockItem = await models.Stock.findByPk(item.stockId);
        await stockItem.update({
          cantidad: stockItem.cantidad + item.cantidad
        })
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