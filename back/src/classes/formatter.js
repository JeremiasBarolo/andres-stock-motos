class Formatter {
    usuarios(data) {
      return data.map(user => ({
        id: user.id,
        user: user.user,
        password: user.password,
        name: user.Persona.nombre,
        lastname: user.Persona.apellido,
        rol: user.Rol.descripcion,
        rolId: user.Rol.id,
        personaId: user.Persona.id,
      }))
    }

    Personas(data) {
      return data.map(user => ({
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        cuit: user.cuit,
        fecha_nacimiento: user.fecha_nacimiento,
        telefono: user.telefono,
        direccion: user.direccion,
        nro_direccion: user.nro_direccion,
        mail: user.mail,
        dni: user.dni,
        tipoPersona: user.TipoPersona.descripcion,
        tipoPersonaId: user.TipoPersona.id,
        Localidad: user.Localidade.descripcion,
        LocalidadId: user.Localidade.id
      }))
    }

    Stock(data) {
      return data.map(stock => ({
        id: stock.id,
        nombre_articulo: stock.nombre,
        descripcion: stock.descripcion,
        costo: stock.costo,
        tipoArticulo: stock.Tipo_Articulo.descripcion,
        tipoArticuloId: stock.Tipo_Articulo.id,
        proveedor: `${stock.Persona.nombre} ${stock.Persona.apellido}`,
        proveedorId: stock.Persona.id,
        
      }))
    }
   
    
  
  }
  
  module.exports = Formatter;