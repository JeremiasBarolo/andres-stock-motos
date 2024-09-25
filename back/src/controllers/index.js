// const TipoArticuloController= require('./TipoArticulo');
const TipoArticuloController = require('./TipoArticulo');
const StockController = require('./Stock');
const PersonasController = require('./Personas');
const UsuariosController = require('./Usuarios');
const LocalidadesController = require('./Localidades');
const RolController = require('./Rol');
const TipoPersonaController = require('./TipoPersona');
const TipoMovimientosController = require('./TipoMovimientos');
const MovimientosController = require('./Movimientos');
const MarcaController = require('./Marca');
const DatosServicioController = require('./DatosServicio');
const MotosController = require('./Motos');
const TipoMotoController = require('./TipoMoto');
const empleadosController = require('./empleados');
const PedidosController = require('./Pedidos');
const checklistController = require('./checklist');
const TipoServicioController = require('./TipoServicio');
const loginController = require('./login'); 
const TareasController = require('./Tareas');
const DatosAdicionalesClienteController = require('./DatosAdicionalesCliente');
const OperacionVentaMotosController = require('./OperacionVentaMotos');



module.exports= {
    TipoArticuloController,
    StockController,
    PersonasController,
    UsuariosController,
    LocalidadesController,
    RolController,
    TipoPersonaController,
    TipoMovimientosController,
    MovimientosController,
    MarcaController,
    DatosServicioController,
    MotosController,
    TipoMotoController,
    empleadosController,
    PedidosController,
    checklistController,
    TipoServicioController,
    loginController,
    TareasController,
    DatosAdicionalesClienteController,
    OperacionVentaMotosController
}