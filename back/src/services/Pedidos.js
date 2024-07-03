

        const { PedidosProvider } = require('../providers');

        const listAllPedidos = async () => {
            return await PedidosProvider.listAllPedidos();
        };

        const listOnePedidos = async (Pedidos_id) => {
            return await PedidosProvider.listOnePedidos(Pedidos_id);
        };

        const createPedidos = async (PedidosData) => {
            return await PedidosProvider.createPedidos(PedidosData);
        };


        const updatePedidos = async (Pedidos_id, updatePedidos) => {
            return await PedidosProvider.updatePedidos(Pedidos_id, updatePedidos);
        };

        const deletePedidos = async (Pedidos_id) => {
            return await PedidosProvider.deletePedidos(Pedidos_id);
        };


        module.exports = {
        listAllPedidos, listOnePedidos, createPedidos, updatePedidos, deletePedidos, 
        };

