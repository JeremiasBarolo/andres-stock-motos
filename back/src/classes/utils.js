var models = require('../models');



class UtilsService {

    async getVentasByEmpleado(id) {
      try {
      const Movimientos = await models.Movimientos.findAll({
        where: {usuarioId: id}
      });
      const Cantidad = Movimientos.length

      
      return Cantidad
      
      } catch (err) {
        console.error('🛑 Error al calcular el subtotal de la lista de productos', err);
        throw err;
      }
    }

    async getVentasByCliente(id) {
      try {
      const Movimientos = await models.Movimientos.findAll({
        where: {personaId: id}
      });
      const Cantidad = Movimientos.length

      
      return Cantidad
      
      } catch (err) {
        console.error('🛑 Error al calcular el subtotal de la lista de productos', err);
        throw err;
      }
    }

    async getTotalPrice(productos) {
        try {
          let subtotal = 0;
    
          for (const producto of productos) {
            const costoTotal = producto.costo * producto.cantidad;
            subtotal += costoTotal;
          }
      
          return subtotal;
        } catch (err) {
          console.error('🛑 Error al calcular el subtotal de la lista de productos', err);
          throw err;
        }
    }

    async getTotalPricePedidos(productos) {
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

      async cantidadesAcumuladasStock(movimientos) {
        let acumulado = await movimientos.reduce((acc, item) => {
          if (!acc[item.TipoMovimiento]) {
            acc[item.TipoMovimiento] = 0;
          }
          acc[item.TipoMovimiento] += item.cantidad;
          return acc;
        }, {});
      
        let result = Object.entries(acumulado).map(([tipoMovimiento, cantidad]) => ({
          TipoMovimiento: tipoMovimiento,
          cantidad: cantidad
        }));
      
        return result;
      }

      async checklistLogica(datosServicioId, checklistOptions) {
        try {
         
          let oldStock = await models.ServicioChecklist.findAll({
            where: { datosServicioId: datosServicioId }
          });
          
          checklistOptions = checklistOptions.map(item =>({
            id: item.value,
            nombre: item.label,
          }));
         
          let oldStockMap = new Map();
          oldStock.forEach(item => {
            oldStockMap.set(item.checklistId, item);
          });
      
          let toAdd = [];
          let toDelete = [];
      
          
          checklistOptions.forEach(newItem => {
            if (oldStockMap.has(newItem.id)) {
              oldStockMap.delete(newItem.id); 
            } else {
              toAdd.push(newItem); 
            }
          });
      
          
          toDelete = Array.from(oldStockMap.values());
      
          
          for (let item of toDelete) {
            await models.ServicioChecklist.destroy({
              where: { datosServicioId: datosServicioId, checklistId: item.checklistId }
            });
          }
      
          
          for (let item of toAdd) {
            await models.ServicioChecklist.create({
              checklistId: item.id,
              datosServicioId: datosServicioId,
            });
          }
      
          console.log('Checklist actualizado correctamente.');
        } catch (error) {
          console.error('Error al actualizar el checklist:', error);
        }
      }

      async calcularSubtotalDatosServicios(DataDatosServicio) {
        return DataDatosServicio.reduce((subtotal, producto) => {
          return subtotal + (producto.costo); 
        }, 0);
      }
     

    async stockLogica(oldStock, newStock, DatosServicio_id, oldDatosServicio, dataUpdated) {
      let toAdd = [];
      let toDelete = [];
      let toUpdate = [];
      
      if(newStock.length === 0) {
        for (let item of oldStock) {
          let stock = await models.Stock.findByPk(item.id);
          await stock.update({
            cantidad: stock.cantidad + item.StockMoviminetos.cantidad
          });
      
          await models.StockMoviminetos.destroy({
            where: { stockId: item.id, movimientosId: DatosServicio_id }
          });
        } 
      } 
      
      let oldStockMap = new Map();
      oldStock.forEach(item => {
        oldStockMap.set(item.id, item.StockMoviminetos.cantidad);
      });
      
      newStock.forEach(newItem => {
        if (oldStockMap.has(newItem.id)) {
          let oldCantidad = oldStockMap.get(newItem.id);
          if (oldCantidad !== newItem.cantidad) {
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
          where: { stockId: item.id, movimientosId: parseInt(DatosServicio_id, 10)},
        });
        
        movimientoAnterior = movimientoAnterior ? parseInt(movimientoAnterior.cantidad, 10) : 0;
        let nuevaCantidad = parseInt(item.cantidad, 10);
      
        if (nuevaCantidad > movimientoAnterior) {
          let diferencia = nuevaCantidad - movimientoAnterior;
          await stock.update({
            cantidad: stock.cantidad - diferencia
          });
        } else if (nuevaCantidad < movimientoAnterior) {
          let diferencia = movimientoAnterior - nuevaCantidad;
          await stock.update({
            cantidad: stock.cantidad + diferencia
          });
        }
      
        await models.StockMoviminetos.update(
          { cantidad: nuevaCantidad },
          { where: { stockId: item.id, movimientosId: DatosServicio_id } }
        );
      }
      
      for (let id of toDelete) {
        let stockMoviminetos = await models.StockMoviminetos.findOne({
          where: { stockId: id, movimientosId: DatosServicio_id }
        });
      
        if (stockMoviminetos) {
          let cantidad = stockMoviminetos.cantidad;
      
          await models.StockMoviminetos.destroy({
            where: { stockId: id, movimientosId: DatosServicio_id },
          });
      
          let stock = await models.Stock.findByPk(id);
          await stock.update({
            cantidad: stock.cantidad + cantidad
          });
        }
      }
      
      for (let item of toAdd) {
        await models.StockMoviminetos.create({
          stockId: item.id,
          movimientosId: DatosServicio_id,
          cantidad: item.cantidad
        });
      
        let stock = await models.Stock.findByPk(item.id);
        await stock.update({
          cantidad: stock.cantidad - item.cantidad
        });
      }
      
      const servicios = oldDatosServicio.Stocks.filter(item => item.tipoId === 3)
      servicios.map(item => 
        dataUpdated.push(
          ({
            id: item.id,
            costo:item.costo,
            cantidad: 1
          }))
        )
  }

  async ClienteHasInfo(id) {
    try {
      const Cliente = await models.Personas.findByPk(id, {
        include: { all: true }
      });
  
      if (!Cliente) {
        throw new Error('Cliente no encontrado');
      }

      const hasIt = !!Cliente.DatosAdicionalesCliente;
      return hasIt;
    } catch (error) {
      console.error('Error al verificar datos adicionales del cliente:', error);
      throw error;
    }
  }

  async OperacionesHasInfo(id) {
    try {
      const venta = await models.Movimientos.findByPk(id, {
        include: { all: true }
      });
  
      if (!venta) {
        throw new Error('Operacion no encontrado');
      }
  
      
      const hasIt = !!venta.OperacionVentaMoto;
      if(hasIt){
        return venta.OperacionVentaMoto
      }else{
        return hasIt
      }
      
     
    } catch (error) {
      console.error('Error al verificar datos adicionales del cliente:', error);
      throw error;
    }
  }

  async EstadoMoto(tipo) {
    try {
      if(tipo === 1){
        return 'Usada'
      }else if(tipo === 2){
        return 'Nueva'
      }else if(tipo === 3){
        return 'En Consignacion'
      }
    } catch (error) {
      console.error('Error al verificar datos adicionales del cliente:', error);
      throw error;
    }
  }
    

  async updateDatosServicioLogica(oldStock, newStock, DatosServicio_id){
    let toAdd = [];
    let toDelete = [];

      
      let oldStockMap = new Map();
      oldStock.forEach(item => {
        oldStockMap.set(item.id);
      });

      
      

      
      newStock.forEach(newItem => {
        if (oldStockMap.has(newItem.id)) {
          oldStockMap.delete(newItem.id); 
        } else {
          toAdd.push(newItem);
        }
      });

      
      toDelete = Array.from(oldStockMap.keys());

      
      for (let id of toDelete) {
        await models.StockMoviminetos.destroy({
          where: { stockId: id, movimientosId: DatosServicio_id }
        });
      }

      
      for (let item of toAdd) {
        await models.StockMoviminetos.create({
          stockId: item.id,
          movimientosId: DatosServicio_id,
          cantidad: 1
        });
      }
  }

  async formatFecha(fecha) {
    const date = new Date(fecha);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Los meses empiezan en 0
    const year = date.getFullYear().toString().slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
  
    return `${day}/${month}/${year} ${hours}:${minutes} hs`;
  }


     


}

module.exports = UtilsService;