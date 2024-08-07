'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movimientos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movimientos.belongsToMany(models.Stock, 
        { 
          through: models.StockMoviminetos,
          foreignKey: 'movimientosId',
        
      });

      Movimientos.belongsTo(models.TipoMovimientos, {
        foreignKey: 'tipoMovimientoId',
        onUpdate: 'CASCADE',
      });

      Movimientos.belongsTo(models.Personas, {
        foreignKey: 'personaId',
        onUpdate: 'CASCADE',
      });

      Movimientos.belongsTo(models.Usuarios, {
        foreignKey: 'usuarioId',
        onUpdate: 'CASCADE',
      });

      Movimientos.belongsTo(models.Motos, {
        foreignKey: 'motoId',
        onUpdate: 'CASCADE',
      });

      Movimientos.belongsTo(models.DatosServicio, {
        foreignKey: 'datosServiciosId',
        onUpdate: 'CASCADE',
      });

      Movimientos.hasOne(models.OperacionVentaMotos, {
        foreignKey: 'movimientoId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Movimientos.init({
    subtotal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movimientos',
  });
  return Movimientos;
};