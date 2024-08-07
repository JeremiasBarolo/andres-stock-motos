const UtilsService = require("./utils")
const utilsService = new UtilsService();

class Formatter {
    usuarios(data) {
      return data.map(user => ({
        id: user.id,
        user: user.user,
        name: user.Persona.nombre,
        lastname: user.Persona.apellido,
        rol: user.Rol.descripcion,
        rolId: user.Rol.id,
        personaId: user.Persona.id,
      }))
    }

    async Tareas(data)  {
      const tareas = await Promise.all(
        data.map(async tarea => {
          const fecha_asignacion = await utilsService.formatFecha(tarea.createdAt);
          return {
            id: tarea.id,
            titulo: tarea.titulo,
            descripcion: tarea.descripcion,
            usuario: `${tarea.Usuario.Persona.nombre} ${tarea.Usuario.Persona.apellido} ` ,
            usuarioId: tarea.usuarioId,
            color: tarea.color,
            estado: tarea.estado,
            fecha_asignacion: fecha_asignacion
          };
        })
      );
  
      return tareas;
    }


    ListPreciosMotos(data) {
      return data.map(moto => ({
        nombre: `${moto.Marca.descripcion} ${moto.modelo} ${moto.year}`,
        costo: moto.precio,
        cantidad: 1,
        tipo_articulo: `Moto ${moto.TipoMoto.descripcion}`,
        datos: moto,
      }))
    }

    ListPreciosStock(data) {
      return data.map(stock => ({
        nombre: stock.nombre,
        costo: stock.costo,
        tipo_articulo: stock.Tipo_Articulo.descripcion,
        cantidad: stock.cantidad,
        datos: stock,
      }))
    }

    StockDePedidos(data) {
      return data.map(pedido => ({
        id: pedido.id,
        cantidad: pedido.cantidad,
        nombre: pedido.Stock.nombre,
        pedidoId: pedido.pedidoId,
        stockId: pedido.Stock.id,
        proveedor: `${pedido.Stock.Persona.nombre} ${pedido.Stock.Persona.apellido}`,
        costo: pedido.Stock.costo,
        total: pedido.cantidad * pedido.Stock.costo
       
      }))
    }

    Pedidos(data) {
      return data.map(pedido => ({
        id: pedido.id,
        descripcion: pedido.descripcion,
        estado: pedido.estado,
        Pedido: pedido.PedidosStocks.map(stock => ({
          id: stock.stockId,
          nombre: stock.Stock.nombre,
          cantidad: stock.cantidad,
          costo: stock.Stock.costo,
          proveedor: `${stock.Stock.Persona.nombre} ${stock.Stock.Persona.apellido}`,
          total: stock.cantidad * stock.Stock.costo
        })),
        total: pedido.PedidosStocks.reduce((acc, stock) => acc + (stock.cantidad * stock.Stock.costo), 0),
        FechaRealizacion: pedido.createdAt
      }))
    }

    Personas(data) {
      return data.map(user => {
        
        const person = {
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
          tipoPersona: user.TipoPersona?.descripcion,
          tipoPersonaId: user.TipoPersona?.id,
          Localidad: user.Localidade?.descripcion,
          LocalidadId: user.Localidade?.id,
          ClienteHasInfo: false
        };
    
        
        if (user.DatosAdicionalesCliente) {
          person.ClienteHasInfo = true
          person.DatosAdicionales = {
            telComercial: user.DatosAdicionalesCliente.telComercial || '',
            estadoCivil: user.DatosAdicionalesCliente.estadoCivil || '',
            empActual: user.DatosAdicionalesCliente.empActual || '',
            domicilioEmp: user.DatosAdicionalesCliente.domicilioEmp || '',
            telEmp: user.DatosAdicionalesCliente.telEmp || '',
            profesion: user.DatosAdicionalesCliente.profesion || '',
            fechaIngreso: user.DatosAdicionalesCliente.fechaIngreso || '',
            ingresosMensuales: user.DatosAdicionalesCliente.ingresosMensuales || '',
            nombreConyugue: user.DatosAdicionalesCliente.nombreConyugue || '',
            trabaja: user.DatosAdicionalesCliente.trabaja || '',
            dondeTrabaja: user.DatosAdicionalesCliente.dondeTrabaja || '',
            dniConyugue: user.DatosAdicionalesCliente.dniConyugue || '',
            razonSocial: user.DatosAdicionalesCliente.razonSocial || '',
            ramoDeActividad: user.DatosAdicionalesCliente.ramoDeActividad || '',
            cuitJuridico: user.DatosAdicionalesCliente.cuitJuridico || '',
            ivaJuridico: user.DatosAdicionalesCliente.ivaJuridico || '',
            ventasMensuales: user.DatosAdicionalesCliente.ventasMensuales || '',
            domicilioJuridico: user.DatosAdicionalesCliente.domicilioJuridico || '',
            telefonoJuridico: user.DatosAdicionalesCliente.telefonoJuridico || '',
            telefax: user.DatosAdicionalesCliente.telefax || '',
            nombreGarante: user.DatosAdicionalesCliente.nombreGarante || '',
            domicilioGarante: user.DatosAdicionalesCliente.domicilioGarante || '',
            cuitGarante: user.DatosAdicionalesCliente.cuitGarante || '',
            direccionEmpGarante: user.DatosAdicionalesCliente.direccionEmpGarante || '',
            casaPropiaAlquilada: user.DatosAdicionalesCliente.casaPropiaAlquilada || '',
            edadGarante: user.DatosAdicionalesCliente.edadGarante || '',
            estadoCivilGarante: user.DatosAdicionalesCliente.estadoCivilGarante || '',
            precioOperacion: user.DatosAdicionalesCliente.precioOperacion || '',
            señaOperacion: user.DatosAdicionalesCliente.señaOperacion || '',
            entregaOperacion: user.DatosAdicionalesCliente.entregaOperacion || '',
            otrasEntOperacion: user.DatosAdicionalesCliente.otrasEntOperacion || '',
            observacionOperacion: user.DatosAdicionalesCliente.observacionOperacion || '',
            cuotas: user.DatosAdicionalesCliente.cuotas || '',
            valorCuota: user.DatosAdicionalesCliente.valorCuota || '',
            diaVencimientoCuota: user.DatosAdicionalesCliente.diaVencimientoCuota || '',
            diaInicioCuota: user.DatosAdicionalesCliente.diaInicioCuota || '',
            mesInicioCuota: user.DatosAdicionalesCliente.mesInicioCuota || '',
            anioInicioCuota: user.DatosAdicionalesCliente.anioInicioCuota || '',
            diaFinalCuota: user.DatosAdicionalesCliente.diaFinalCuota || '',
            mesFinalCuota: user.DatosAdicionalesCliente.mesFinalCuota || '',
            anioFinalCuota: user.DatosAdicionalesCliente.anioFinalCuota || '',
            lugarPago: user.DatosAdicionalesCliente.lugarPago || '',
            gastosPap: user.DatosAdicionalesCliente.gastosPap || '',
            prenda: user.DatosAdicionalesCliente.prenda || '',
            inscripcion: user.DatosAdicionalesCliente.inscripcion || '',
            debe: user.DatosAdicionalesCliente.debe || '',
            pago: user.DatosAdicionalesCliente.pago || '',
            debeTrue: user.DatosAdicionalesCliente.debeTrue || false,
            pagoTrue: user.DatosAdicionalesCliente.pagoTrue || false,
            fechaRealizacion: user.DatosAdicionalesCliente.fechaRealizacion || '',
            conceptoFinal: user.DatosAdicionalesCliente.conceptoFinal || ''
          };
        }
    
        return person;
      });
    }
    

    

    async mejoresClientes(data) {
      const clientes = await Promise.all(
        data.map(async user => {
          const ventas = await utilsService.getVentasByCliente(user.id);
          return {
            id: user.id,
            nombre: `${user.nombre} ${user.apellido}`,
            ventas: ventas,
            Localidad: user.Localidade.descripcion
          };
        })
      );
  
      return clientes;
    }

    async mejoresEmpleados(data) {
      try {
        const empleados = await Promise.all(
          data.map(async user => {
            if(user.Usuarios.length > 0){
              const ventas = await utilsService.getVentasByEmpleado(user.Usuarios[0].id);
            return {
              id: user.id,
              nombre: `${user.nombre} ${user.apellido}`,
              ventas: ventas,
              Localidad: user.Localidade.descripcion
            };
            }else{
              return {
                id: user.id,
                nombre: `${user.nombre} ${user.apellido}`,
                ventas: 0,
                Localidad: user.Localidade.descripcion
              };
            }
            
          })
        );
    
        return empleados;
      } catch (err) {
        console.error('🛑 Error al obtener las mejores ventas de empleados', err);
        throw err;
      }
    }

    Persona(user) {
      return {
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
        tipoPersona: user.TipoPersona?.descripcion,
        tipoPersonaId: user.TipoPersona.id,
        Localidad: user.Localidade.descripcion,
        LocalidadId: user.Localidade.id
      }
    }

    Stock(data) {
      return data.map(stock => ({
        id: stock.id,
        nombre_articulo: stock.nombre,
        descripcion: stock.descripcion,
        costo: stock.costo,
        cantidad: stock.cantidad,
        cantidadActual: stock.cantidad,
        tipoArticulo: stock.Tipo_Articulo.descripcion,
        tipoArticuloId: stock.Tipo_Articulo.id,
        proveedor: `${stock.Persona.nombre} ${stock.Persona.apellido}`,
        proveedorId: stock.Persona.id,
        
      }))
    }

    Insumos(data) {
      return data.map(stock => ({
        id: stock.id,
        nombre_articulo: stock.nombre,
        descripcion: stock.descripcion,
        costo: stock.costo,
        cantidad: stock.cantidad,
        cantidadActual: stock.cantidad,
        tipoArticulo: stock.Tipo_Articulo.descripcion,
        tipoArticuloId: stock.Tipo_Articulo.id,
        proveedor: `${stock.Persona.nombre} ${stock.Persona.apellido}`,
        proveedorId: stock.Persona.id,
        
      }))
    }

    Motos(data) {
      return data.map(moto => ({
        id: moto.id,
        modelo: moto.modelo,
        year: moto.year,
        num_motor: moto.num_motor,
        color: moto.color,
        num_cuadro: moto.num_cuadro,
        cilindrada: moto.cilindrada,
        cert_num_fabrica: moto.cert_num_fabrica,
        precio: moto.precio,
        marcaId: moto.marcaId,
        tipoMotoId: moto.tipoMotoId,
        Marca: moto.Marca.descripcion,
        TipoMoto: moto.TipoMoto.descripcion
        
      }))
    }

    DatosServicio(data) {
      return data.map(moto => ({
        id: moto.id,
        tipo_servicio: moto.tipo_servicio,
        fecha_recepcion: moto.fecha_recepcion,
        fecha_est_entrega: moto.fecha_est_entrega,
        hora_est_entrega: moto.hora_est_entrega,
        modelo: moto.modelo,
        num_motor: moto.num_motor,
        num_chasis: moto.num_chasis,
        color: moto.color,
        patente: moto.patente,
        kilometros: moto.kilometros,
        estado_general: moto.estado_general,
        observaciones: moto.observaciones,
        recepcionistaId: moto.recepcionistaId,
        Recepcionista: `${moto.Persona.nombre} ${moto.Persona.apellido}`
        
      }))
    }

    Ventas(data) {
      return data.map(venta => ({
        id: venta.id,
        createdAt: venta.createdAt,
        updatedAt: venta.updatedAt,
        cliente: `${venta.Persona.nombre} ${venta.Persona.apellido}`,
        usuario:venta.Usuario.user,
        usuarioId: venta.Usuario.id,
        personaId: venta.Persona.id,
        TipoMovimiento: venta.TipoMovimiento.descripcion,
        tipoMovimientoId: venta.TipoMovimiento.id,
        subtotal: venta.subtotal,
        stock: venta.Stocks.map(stock => ({
          id: stock.id,
          nombre: stock.nombre,
          cantidad: stock.StockMoviminetos.cantidad,
          cantidadActual: stock.cantidad,
          costo: stock.costo
        }))
      }))
    }
    VentasMotoPorCategoria(data) {
      return data.map(venta => ({
        id: venta.id,
        TipoMovimiento: `${venta.TipoMovimiento.descripcion} ${venta.TipoMovimiento.descripcion== 'Venta Moto' && venta.Moto.tipoMotoId == 1 ? 'Usada' : 'Nueva'}`,
        cantidad: venta.TipoMovimiento.descripcion === 'Venta Moto'? 1 : 0
      }))
    }

    VentasGeneralPorCategoria(data) {
      return data.map(venta => ({
        id: venta.id,
        TipoMovimiento: `${venta.Tipo_Articulo.descripcion}`,
        cantidad: venta.Movimientos.reduce((acc, item) => {
          return acc + item.StockMoviminetos.cantidad;
        }, 0)
      }))
    }

    Service(data) {
      return data.map(servicio => ({
        id: servicio.id,
        createdAt: servicio.createdAt,
        updatedAt: servicio.updatedAt,
        cliente: `${servicio.Persona.nombre} ${servicio.Persona.apellido}`,
        usuario:servicio.Usuario.user,
        usuarioId: servicio.Usuario.id,
        personaId: servicio.Persona.id,
        TipoMovimiento: servicio.TipoMovimiento.descripcion,
        tipoMovimientoId: servicio.TipoMovimiento.id,
        subtotal: servicio.subtotal,
        Servicios: servicio.Stocks.map(stock => ({
          id: stock.id,
          nombre: stock.nombre,
          costo: stock.costo,
          cantidad: stock.StockMoviminetos.cantidad,
          tipoArticulo: stock.Tipo_Articulo.descripcion
        })),

        checklist: servicio.DatosServicio.checklists.map(stock => ({
          id: stock.id,
          nombre: stock.descripcion,
        })),

        DatosServicio: servicio.DatosServicio,
        TipoServicio: servicio.DatosServicio.TipoServicio.descripcion,
        tipoServicioId: servicio.DatosServicio.TipoServicio.id,
        datosServiciosId: servicio.DatosServicio.id,
        Recepcionista: `${servicio.DatosServicio.Persona.nombre} ${servicio.DatosServicio.Persona.apellido}`

      }))
    }

    OneService(data) {
      return {
        id: data.id,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        cliente: `${data.Persona.nombre} ${data.Persona.apellido}`,
        usuario:data.Usuario.user,
        usuarioId: data.Usuario.id,
        personaId: data.Persona.id,
        TipoMovimiento: data.TipoMovimiento.descripcion,
        tipoMovimientoId: data.TipoMovimiento.id,
        subtotal: data.subtotal,
        Servicios: data.Stocks.map(stock => ({
          id: stock.id,
          nombre: stock.nombre,
          costo: stock.costo,
          cantidad: stock.StockMoviminetos.cantidad,
          cantidadActual: stock.cantidad,
          tipoArticulo: stock.Tipo_Articulo.descripcion
        })),

        checklist: data.DatosServicio.checklists.map(stock => ({
          id: stock.id,
          nombre: stock.descripcion,
        })),

        DatosServicio: data.DatosServicio,
        TipoServicio: data.DatosServicio.TipoServicio.descripcion,
        tipoServicioId: data.DatosServicio.TipoServicio.id,
        datosServiciosId: data.DatosServicio.id,
        Recepcionista: `${data.DatosServicio.Persona.nombre} ${data.DatosServicio.Persona.apellido}`

      }
    }

    async MotosVenta(data) {

      const ventas = await Promise.all(
        data.map(async venta => {
          const ClienteHasInfo = await utilsService.ClienteHasInfo(venta.Persona.id)
          const OperacionesHasInfo = await utilsService.OperacionesHasInfo(venta.id)
          const EstadoMoto = await utilsService.EstadoMoto(venta.Moto.tipoMotoId)
          return {
            id: venta.id,
            createdAt: venta.createdAt,
            updatedAt: venta.updatedAt,
            cliente: `${venta.Persona.nombre} ${venta.Persona.apellido}`,
            clienteId: venta.Persona.id,
            usuario:venta.Usuario.user,
            usuarioId: venta.Usuario.id,
            personaId: venta.Persona.id,
            TipoMovimiento: `${venta.TipoMovimiento.descripcion} ${EstadoMoto}`,
            tipoMovimientoId: venta.TipoMovimiento.id,
            subtotal: venta.subtotal,
            ClienteHasInfo: ClienteHasInfo,
            OperacionHasInfo: OperacionesHasInfo,
            Moto: {
              id: venta.Moto.id,
              marcaId: venta.Moto.marcaId,
              marca: venta.Moto.Marca.descripcion,
              modelo: venta.Moto.modelo,
              estado: venta.Moto.tipoId,
              year: venta.Moto.year,
              color: venta.Moto.color,
              num_motor: venta.Moto.num_motor,
              num_cuadro: venta.Moto.num_cuadro,
              cilindrada: venta.Moto.cilindrada,
              cert_num_fabrica: venta.Moto.cert_num_fabrica,
              precio: venta.Moto.precio,
              tipoMotoId: venta.Moto.tipoMotoId,
              kilometros: venta.Moto.kilometros
            }
          };
        })
      );
  
      return ventas;
    } 

    OneVentas(data) {
      return {
        id: data.id,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        cliente: `${data.Persona.nombre} ${data.Persona.apellido}`,
        usuario:data.Usuario.user,
        usuarioId: data.Usuario.id,
        personaId: data.Persona.id,
        TipoMovimiento: data.TipoMovimiento.descripcion,
        tipoMovimientoId: data.TipoMovimiento.id,
        subtotal: data.subtotal,
        stock: data.Stocks.map(stock => ({
          id: stock.id,
          nombre: stock.nombre,
          cantidadActual: stock.cantidad,
          cantidad: stock.StockMoviminetos.cantidad,
          costo: stock.costo
        }))
      }
    }


    Historial(data) {
     

      return data.map(venta => 
        ({
        id: venta.id,
        createdAt: venta.createdAt,
        updatedAt: venta.updatedAt,
        cliente: `${venta.Persona.nombre} ${venta.Persona.apellido}`,
        usuario: venta.Usuario.user,
        usuarioId: venta.Usuario.id,
        personaId: venta.Persona.id,
        TipoMovimiento: venta.TipoMovimiento.descripcion,
        tipoMovimientoId: venta.TipoMovimiento.id,
        subtotal: venta.subtotal,
        FechaRealizacion: this.formatDateAndTime(venta.createdAt).formattedDate,
        hora: this.formatDateAndTime(venta.createdAt).formattedTime,
      }))
    }

    formatDateAndTime(dateTimeString) {
       
      const date = new Date(dateTimeString);
    
    
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const year = String(date.getFullYear()).slice(-2); 
    
      
      const formattedDate = `${day}/${month}/${year}`;
    
      
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
    
      
      const formattedTime = `${hours}:${minutes}:${seconds}`;
    
      return { formattedDate, formattedTime };
    }
  }
  
  module.exports = Formatter;