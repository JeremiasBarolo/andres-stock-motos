'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.belongsTo(models.Personas, {
        foreignKey: 'personaId',
        onUpdate: 'CASCADE',
      });

      Usuarios.belongsTo(models.Rol, {
        foreignKey: 'rolId',
        onUpdate: 'CASCADE',
      });

      Usuarios.hasMany(models.Movimientos, {
        foreignKey: 'usuarioId'
      })

      Usuarios.hasMany(models.Tareas, {
        foreignKey: 'usuarioId'
      })
    }
  }
  Usuarios.init({
    user: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};