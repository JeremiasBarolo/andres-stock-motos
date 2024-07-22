const { where } = require('sequelize');
var models = require('../models');
const Formatter = require('./formatter');
const format = new Formatter();
const stockService = require('./stock');
const StockService = new stockService();

class PedidosService {
  async listAllPedidos() {
    try {
      const Pedidos = await models.Pedidos.findAll({
        include: [
          {
            model: models.PedidosStock,
            include: [
              {
                model: models.Stock,
                include: [
                  {
                    model: models.Personas,
                    
                  }
                ]
              }
            ]
          }
        ]
      });
      console.log('✅ Pedidos were found');
      return format.Pedidos(Pedidos);
    } catch (err) {
      console.error('🛑 Error when fetching Pedidos', err);
      throw err;
    }
  }

  async listAllPedidosPendientes() {
    try {
      const Pedidos = await models.Pedidos.findAll({
        include: [{ all: true }],
        where: { estado: "En Preparacion" }
      });
      console.log('✅ Pedidos were found');
      return Pedidos.length
    } catch (err) {
      console.error('🛑 Error when fetching Pedidos', err);
      throw err;
    }
  }

 

  async listOnePedidos(Pedidos_id) {
    try {
      const onePedidos = await models.Pedidos.findByPk(Pedidos_id);
      if (!onePedidos) {
        return null;
      }
      return format.Pedidos(onePedidos);
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async listStockOnePedidos(Pedidos_id) {
    try {
      const onePedidos = await models.PedidosStock.findAll(
        {
          where: { pedidoId: Pedidos_id },
          include: [
            {
              model: models.Stock,
              include: [
                {
                  model: models.Personas,

                }
              ]
            }
          ]
        }
      );
      if (!onePedidos) {
        return null;
      }
      return format.StockDePedidos(onePedidos);
    } catch (err) {
      console.error('🛑 Error when fetching a single Usuario', err);
      throw err;
    }
  }

  async createPedidos(DataPedidos) {
    try {
      const newPedidos = await models.Pedidos.create({
          descripcion: DataPedidos.descripcion,
          estado: 'En Preparacion'
        });

      for(const stock of DataPedidos.productos){
        await models.PedidosStock.create({
          stockId: stock.id,
          pedidoId: newPedidos.id,
          cantidad: stock.cantidad
        })
      }

      return newPedidos;
    } catch (err) {
      console.error('🛑 Error when creating Pedidos', err);
      throw err;
    }
  }

  async updatePedidos(Pedidos_id, dataUpdated) {
    try {
      const oldPedidos = await models.Pedidos.findByPk(Pedidos_id);
      if (!oldPedidos) {
        return null;
      }

      let newPedidos = await oldPedidos.update(dataUpdated);
      return newPedidos;
    } catch (err) {
      console.error('🛑 Error when updating Pedidos', err);
      throw err;
    }
  }

  async SumarCantidades(Pedidos_id, dataUpdated) {
    try {
      const oldPedidos = await models.Pedidos.findByPk(Pedidos_id, {
        include: [{ all: true }]
      });
      if (!oldPedidos) {
        return null;
      }
      
      const productos = oldPedidos.PedidosStocks;
      for (const item of productos) {
        let cantidad = parseInt(item.cantidad, 10)
        let stock = await StockService.listOneStock(item.stockId)
        await stock.update({ cantidad: stock.cantidad + cantidad })
      }

      let newPedidos = await oldPedidos.update(dataUpdated);
      return newPedidos;
    } catch (err) {
      console.error('🛑 Error when updating Pedidos', err);
      throw err;
    }
  }

  async updatePedidosStock(Pedidos_id, dataUpdated) {
    try {
      const onePedido = await models.Pedidos.findByPk(Pedidos_id, {
        include: [{ all: true }]
      });

      if (!onePedido) {
        return null;
      }

      
      let oldStock = onePedido.PedidosStocks;
      let newStock = dataUpdated.productos;
      let toAdd = [];
      let toUpdate = [];
      let toDelete = [];

      
      let oldStockMap = new Map();
      oldStock.forEach(item => {
        oldStockMap.set(item.stockId, item.cantidad);
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
        await models.PedidosStock.update(
          { cantidad: item.cantidad },
          { where: { stockId: item.id, pedidoId: Pedidos_id } }
        );
      }

      
      for (let id of toDelete) {
        await models.PedidosStock.destroy({
          where: { stockId: id, pedidoId: Pedidos_id }
        });
      }

      
      for (let item of toAdd) {
        await models.PedidosStock.create({
          stockId: item.id,
          pedidoId: Pedidos_id,
          cantidad: item.cantidad
        });
      }

      

      let newVentas = await onePedido.update(dataUpdated);
      return newVentas;
    } catch (err) {
      console.error('🛑 Error when updating Pedidos', err);
      throw err;
    }
  }

  async deletePedidos(Pedidos_id) {
    try {
      const deletedPedidos = await models.Pedidos.findByPk(Pedidos_id);
      if (!deletedPedidos) {
        return null;
      }
      await models.Pedidos.destroy({ where: { id: Pedidos_id } });
      return deletedPedidos;
    } catch (err) {
      console.error('🛑 Error when deleting Pedidos', err);
      throw err;
    }
  }

  
}

module.exports = PedidosService;