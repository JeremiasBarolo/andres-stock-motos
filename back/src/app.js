
// Requires
const express = require("express")
const { 

 } = require('./routes')
const { initializeDB } = require('./db/initializeDB');
require('dotenv').config();
const cors = require("cors");
const {checkAdmin} = require('./db/createAdminEntity');
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
    EmpleadosRouter,
    ProveedoresRouter
    
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
app.use("/empleados", EmpleadosRouter)
app.use("/proveedores", ProveedoresRouter)
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








app.listen(PORT, 
    async () => {
        await initializeDB();
        // await checkAdmin();
        console.log(` >>>>> 🚀 Server started at http://localhost:${PORT}`);
})


