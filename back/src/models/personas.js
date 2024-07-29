'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Personas.hasMany(models.Stock, {
        foreignKey: 'personaId'
      })

      Personas.belongsTo(models.TipoPersona, {
        foreignKey: 'tipoPersonaId',
        onUpdate: 'CASCADE',
      });

      Personas.belongsTo(models.Localidades, {
        foreignKey: 'localidadId',
        onUpdate: 'CASCADE',
      });

      Personas.hasMany(models.Usuarios, {
        foreignKey: 'personaId'
      })

      Personas.hasMany(models.Movimientos, {
        foreignKey: 'personaId'
      })

      Personas.hasMany(models.DatosServicio, {
        foreignKey: 'recepcionistaId',
        onUpdate: 'CASCADE',
      });

      Personas.hasOne(models.DatosAdicionalesCliente, {
        foreignKey: 'clienteId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }
  Personas.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cuit: DataTypes.INTEGER,
    fecha_nacimiento: DataTypes.DATE,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    nro_direccion: DataTypes.INTEGER,
    mail: DataTypes.STRING,
    dni: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Personas',
  });
  return Personas;
};