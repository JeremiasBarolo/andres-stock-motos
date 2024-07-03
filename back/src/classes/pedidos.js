const { where } = require('sequelize');
var models = require('../models');
const Formatter = require('./formatter');
const format = new Formatter();

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