

const { PedidosService } = require("../services");


const listAllPedidos = async (req, res) => {
  try {
    const Pedidos = await PedidosService.listAllPedidos();
    res.json(Pedidos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listAllPedidosPendientes = async (req, res) => {
  try {
    const Pedidos = await PedidosService.listAllPedidosPendientes();
    res.json(Pedidos);
  } catch (err) {
    res.status(500).json({ action: "listAll", error: err.message });
  }
};

const listOnePedidos = async (req, res) => {
  try {
    const id = req.params.Pedidos_id;
    const Pedidos = await PedidosService.listOnePedidos(id);
    res.json(Pedidos);

  } catch (err) {
    res.status(500).json({ action: "listOnePedidos", error: err.message });
  }

};

const listStockOnePedidos = async (req, res) => {
  try {
    const id = req.params.Pedidos_id;
    const Pedidos = await PedidosService.listStockOnePedidos(id);
    res.json(Pedidos);

  } catch (err) {
    res.status(500).json({ action: "listOnePedidos", error: err.message });
  }

};

const createPedidos = async (req, res) => {

  try {
    const newPedidos = await PedidosService.createPedidos(req.body);

    res.json(newPedidos);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create Pedidos.' });
  }
};

const updatePedidos = async (req, res) => {

  try {
    const PedidosUpdate = await PedidosService.updatePedidos(req.params.Pedidos_id, req.body);
    res.json(PedidosUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updatePedidos', error: err.message });
  }
};

const SumarCantidades = async (req, res) => {

  try {
    const PedidosUpdate = await PedidosService.SumarCantidades(req.params.Pedidos_id, req.body);
    res.json(PedidosUpdate);
  } catch (err) {
    res.status(500).json({ action: 'SumarCantidades', error: err.message });
  }
};

const updatePedidosStock = async (req, res) => {

  try {
    const PedidosUpdate = await PedidosService.updatePedidosStock(req.params.Pedidos_id, req.body);
    res.json(PedidosUpdate);
  } catch (err) {
    res.status(500).json({ action: 'updatePedidos', error: err.message });
  }
};

const deletePedidos = async (req, res) => {
  const id = req.params.Pedidos_id;
  try {
    await PedidosService.deletePedidos(id);
    res.json('');
  } catch (err) {
    res.status(500).json({ action: 'deletePedidos', error: err.message });
  }
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
