const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Usuario y contraseña son obligatorios' });
    }

    const usuario = await models.Usuarios.findOne({
       where: { user: username.trim().toLowerCase() } ,
       include: [
        {
          all:true
        }
      ]
      
      });

    if (!usuario) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const passwordMatch = await bcrypt.compare(password, usuario.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }


    let rol 
    const isAdmin = usuario.Rol.isAdmin;
    isAdmin === 0 ? rol = 'EMPLEADO' : rol = 'ADMIN';

    const token = jwt.sign({ username: username, userId: usuario.id, rol: rol, nombre: `${usuario.Persona.nombre} ${usuario.Persona.apellido}`, personaId:usuario.Persona.id }, process.env.SECRET, { expiresIn: '24h' });
    res.status(200).json({ token:token});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = { login };
