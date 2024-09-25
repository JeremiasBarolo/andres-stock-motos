'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DatosServicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DatosServicio.hasMany(models.Movimientos, {
        foreignKey: 'datosServiciosId'
      })

      DatosServicio.belongsTo(models.TipoServicio, {
        foreignKey: 'tipo_servicio',
        onUpdate: 'CASCADE',
      });

      DatosServicio.belongsTo(models.Personas, {
        foreignKey: 'recepcionistaId',
        onUpdate: 'CASCADE',
      });

      DatosServicio.belongsToMany(models.checklist, 
        { 
          through: models.ServicioChecklist,
          foreignKey: 'datosServicioId',
        
      });
    }
  }
  DatosServicio.init({
    fecha_recepcion: DataTypes.DATE,
    fecha_est_entrega: DataTypes.DATE,
    hora_est_entrega: DataTypes.INTEGER,
    modelo: DataTypes.STRING,
    num_motor: DataTypes.STRING,
    num_chasis: DataTypes.STRING,
    color: DataTypes.STRING,
    patente: DataTypes.STRING,
    kilometros: DataTypes.INTEGER,
    estado_general: DataTypes.STRING,
    observaciones: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DatosServicio',
  });
  return DatosServicio;
};