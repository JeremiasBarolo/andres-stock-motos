'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
// <=============================== Stock ===============================> 
  await queryInterface.addColumn('Stocks', 'tipoId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Tipo_Articulos',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  await queryInterface.addColumn('Stocks', 'personaId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Personas',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });
// <=============================== Fin Stock ===============================> 

// <=============================== Personas ===============================> 
  await queryInterface.addColumn('Personas', 'tipoPersonaId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'TipoPersonas',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  await queryInterface.addColumn('Personas', 'localidadId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Localidades',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  
// <=============================== Fin Personas ===============================> 


// <=============================== Usuarios ===============================> 
  await queryInterface.addColumn('Usuarios', 'personaId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Personas',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  await queryInterface.addColumn('Usuarios', 'rolId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Rols',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });
// <=============================== Fin Usuarios ===============================>   

// <=============================== StockMovimientos ===============================> 
  await queryInterface.addColumn('StockMoviminetos', 'stockId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Stocks',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  await queryInterface.addColumn('StockMoviminetos', 'movimientosId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Movimientos',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });
// <=============================== Fin StockMovimientos ===============================>
  
// <=============================== Movimientos ===============================> 
  await queryInterface.addColumn('Movimientos', 'tipoMovimientoId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'TipoMovimientos',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  await queryInterface.addColumn('Movimientos', 'personaId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Personas',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  await queryInterface.addColumn('Movimientos', 'usuarioId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Usuarios',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });
  await queryInterface.addColumn('Movimientos', 'motoId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Motos',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  await queryInterface.addColumn('Movimientos', 'datosServiciosId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'DatosServicios',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });
// <=============================== Fin Movimientos ===============================>     


// <=============================== Motos ===============================> 
  await queryInterface.addColumn('Motos', 'marcaId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Marcas',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  await queryInterface.addColumn('Motos', 'tipoMotoId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'TipoMotos',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });
// <=============================== Fin Motos ===============================>

// <=============================== DatosServicios ===============================> 
  await queryInterface.addColumn('DatosServicios', 'recepcionistaId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Personas',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  await queryInterface.addColumn('DatosServicios', 'tipo_servicio', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'TipoServicios',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

 
// <=============================== Fin DatosServicios ===============================>
  
  


// <=============================== Pedidos Stock ===============================> 
    await queryInterface.addColumn('PedidosStocks', 'pedidoId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Pedidos',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    await queryInterface.addColumn('PedidosStocks', 'stockId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Stocks',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  
   
// <=============================== Fin Pedidos Stock ===============================>  
  
// <=============================== ServicioChecklist ===============================> 
    await queryInterface.addColumn('ServicioChecklists', 'datosServicioId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'DatosServicios',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    await queryInterface.addColumn('ServicioChecklists', 'checklistId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'checklists',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  
   
// <=============================== Fin Pedidos Stock ===============================>  


// <=============================== Tareas ===============================>  
  await queryInterface.addColumn('Tareas', 'usuarioId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Usuarios',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  // <=============================== Fin Tareas ===============================> 
    
    // <=============================== Datos Adicionales Clientes ===============================>  
  await queryInterface.addColumn('DatosAdicionalesClientes', 'clienteId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Personas',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  // <=============================== Fin Datos Adicionales Clientes ===============================>
    
    // <=============================== Datos Operacion Venta Moto ===============================>  
  await queryInterface.addColumn('OperacionVentaMotos', 'movimientoId', {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Movimientos',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  });

  // <=============================== Fin Datos Operacion Venta Moto===============================> 

  },

  async down (queryInterface, Sequelize) {
    // <=============================== Stock ===============================> 
      await queryInterface.removeColumn('Stocks', 'tipoId');
    await queryInterface.removeColumn('Stocks', 'personaId');
    // <=============================== Fin Stock ===============================> 

    // <=============================== Personas ===============================> 
    await queryInterface.removeColumn('Personas', 'tipoPersonaId');
    await queryInterface.removeColumn('Personas', 'localidadId');
    // <=============================== Fin Personas ===============================> 

    // <=============================== Usuarios ===============================> 
    await queryInterface.removeColumn('Usuarios', 'personaId');
    await queryInterface.removeColumn('Usuarios', 'rolId');
    // <=============================== Fin Usuarios ===============================>   

    // <=============================== StockMovimientos ===============================> 
    await queryInterface.removeColumn('StockMoviminetos', 'stockId');
    await queryInterface.removeColumn('StockMoviminetos', 'movimientosId');
    // <=============================== Fin StockMovimientos ===============================>
    
    // <=============================== Movimientos ===============================> 
    await queryInterface.removeColumn('Movimientos', 'tipoMovimientoId');
    await queryInterface.removeColumn('Movimientos', 'personaId');
    await queryInterface.removeColumn('Movimientos', 'usuarioId');
    await queryInterface.removeColumn('Movimientos', 'motoId');
    await queryInterface.removeColumn('Movimientos', 'datosServiciosId');
    // <=============================== Fin Movimientos ===============================>     

    // <=============================== Motos ===============================> 
    await queryInterface.removeColumn('Motos', 'marcaId');
    await queryInterface.removeColumn('Motos', 'tipoMotoId');
    // <=============================== Fin Motos ===============================>

    // <=============================== DatosServicios ===============================> 
    await queryInterface.removeColumn('DatosServicios', 'recepcionistaId');
    await queryInterface.removeColumn('DatosServicios', 'tipo_servicio');
    // <=============================== Fin DatosServicios ===============================>
      
    // <=============================== ServicioChecklists ===============================> 
    await queryInterface.removeColumn('ServicioChecklists', 'checklistId');
    await queryInterface.removeColumn('ServicioChecklists', 'datosServicioId');
    // <=============================== Fin ServicioChecklists ===============================>

    // <=============================== Motos ===============================> 
    await queryInterface.removeColumn('PedidosStocks', 'pedidoId');
    await queryInterface.removeColumn('PedidosStocks', 'stockId');
  // <=============================== Fin Motos ===============================>

    // <=============================== Tareas ===============================> 
      
    await queryInterface.removeColumn('Tareas', 'usuarioId');
  // <=============================== Fin Tareas ===============================>

   // <=============================== datosAdicionalesCliente ===============================> 
    await queryInterface.removeColumn('DatosAdicionalesClientes', 'clienteId');
    // <=============================== Fin datosAdicionalesCliente ===============================>


  // <=============================== datosAdicionalesCliente ===============================> 
    await queryInterface.removeColumn('OperacionVentaMotos', 'movimientoId');
    // <=============================== Fin datosAdicionalesCliente ===============================>
  }
};