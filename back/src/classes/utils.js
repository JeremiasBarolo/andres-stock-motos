var models = require('../models');



class UtilsService {
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


}

module.exports = UtilsService;