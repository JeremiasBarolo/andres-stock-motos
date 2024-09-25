const PedidosService = require('../classes/pedidos');
const pedidosService = new PedidosService();

const listAllPedidos = async () => {
  return await pedidosService.listAllPedidos();
};

const listAllPedidosPendientes = async () => {
  return await pedidosService.listAllPedidosPendientes();
};

const listOnePedidos = async (Pedidos_id) => {
  return await pedidosService.listOnePedidos(Pedidos_id);
};

const listStockOnePedidos = async (Pedidos_id) => {
  return await pedidosService.listStockOnePedidos(Pedidos_id);
};

const createPedidos = async (PedidosData) => {
  return await pedidosService.createPedidos(PedidosData);
};

const updatePedidos = async (Pedidos_id, dataUpdated) => {
  return await pedidosService.updatePedidos(Pedidos_id, dataUpdated);
};
const SumarCantidades = async (Pedidos_id, dataUpdated) => {
  return await pedidosService.SumarCantidades(Pedidos_id, dataUpdated);
};


const updatePedidosStock = async (Pedidos_id, dataUpdated) => {
  return await pedidosService.updatePedidosStock(Pedidos_id, dataUpdated);
};

const deletePedidos = async (Pedidos_id) => {
  return await pedidosService.deletePedidos(Pedidos_id);
};

module.exports = {
  listAllPedidos,
  listOnePedidos,
  createPedidos,
  updatePedidos,
  deletePedidos,
  listStockOnePedidos,
  updatePedidosStock,
  SumarCantidades,
  listAllPedidosPendientes
};