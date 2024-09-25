
// Requires
const express = require("express")
const { 

 } = require('./routes')
const { initializeDB } = require('./db/initializeDB');
require('dotenv').config();
const cors = require("cors");

const { 
    TipoArticuloRouter,
    StockRouter,
    PersonasRouter,
    UsuariosRouter,
    RolRouter,
    LocalidadesRouter,
    TipoPersonaRouter,
    MovimientosRouter,
    TipoMovimientosRouter,
    MotosRouter,
    DatosServicioRouter,
    MarcaRouter,
    TipoMotoRouter,
    PedidosRouter,
    ChecklistRouter,
    TipoServicioRouter,
    loginRouter,
    tareasRouter,
    datosAdicionalesClienteRouter,
    operacionVentaMotosRouter
    
 } = require('./routes')



// App Creation
const app = express();
const PORT = process.env.PORT || 3001;

// Aplication Middlewares
app.use(express.json()) 
app.use(cors());


// Routes
app.use("/tipo_articulo", TipoArticuloRouter)
app.use("/stock", StockRouter)
app.use("/personas", PersonasRouter)
app.use("/usuarios", UsuariosRouter)
app.use("/rol", RolRouter)
app.use("/localidades", LocalidadesRouter)
app.use("/tipo_personas", TipoPersonaRouter)
app.use("/movimientos", MovimientosRouter)
app.use("/tipo_movimientos", TipoMovimientosRouter)
app.use("/motos", MotosRouter)
app.use("/datos_servicio", DatosServicioRouter)
app.use("/marca", MarcaRouter)
app.use("/tipo_moto", TipoMotoRouter)
app.use("/pedidos", PedidosRouter)
app.use("/checklist", ChecklistRouter)
app.use("/tipo-servicio", TipoServicioRouter)
app.use("/login", loginRouter)
app.use("/tareas", tareasRouter)
app.use("/datosAdicionales", datosAdicionalesClienteRouter)
app.use("/operacion", operacionVentaMotosRouter)








app.listen(PORT, 
    async () => {
        await initializeDB();
        console.log(` >>>>> 🚀 Server started at http://localhost:${PORT}`);
})


