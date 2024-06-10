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
      model: 'Stocks',
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

 
// <=============================== Fin DatosServicios ===============================>   



  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
