// Index of routes
// const TipoArticuloRouter = require('./TipoArticulo');
const TipoArticuloRouter = require('./TipoArticulo');
const StockRouter = require('./Stock');
const PersonasRouter = require('./Personas');
const UsuariosRouter = require('./Usuarios');
const LocalidadesRouter = require('./Localidades');
const TipoPersonaRouter = require('./TipoPersona');
const RolRouter = require('./Rol');
const TipoMovimientosRouter = require('./TipoMovimientos');
const MovimientosRouter = require('./Movimientos');
const MarcaRouter = require('./Marca');
const DatosServicioRouter = require('./DatosServicio');
const MotosRouter = require('./Motos');
const TipoMotoRouter = require('./TipoMoto');
const PedidosRouter = require('./pedidos');
const ChecklistRouter = require('./checklist');
const TipoServicioRouter = require('./tipoServicio');
const loginRouter = require('./login');
const tareasRouter = require('./tareas');
const datosAdicionalesClienteRouter = require('./datosAdicionalesCliente');
const operacionVentaMotosRouter = require('./operacionVentaMotos');   





module.exports = {
    TipoArticuloRouter,
    StockRouter,
    PersonasRouter,
    UsuariosRouter,
    LocalidadesRouter,
    TipoPersonaRouter,
    RolRouter,
    TipoMovimientosRouter,
    MovimientosRouter,
    MarcaRouter,
    DatosServicioRouter,
    MotosRouter,
    TipoMotoRouter,
    PedidosRouter,
    ChecklistRouter,
    TipoServicioRouter,
    loginRouter,
    tareasRouter,
    datosAdicionalesClienteRouter,
    operacionVentaMotosRouter
};