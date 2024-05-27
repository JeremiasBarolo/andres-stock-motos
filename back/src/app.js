
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
    TipoPersonaRouter
    
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








app.listen(PORT, 
    async () => {
        await initializeDB();
        // await checkAdmin();
        console.log(` >>>>> 🚀 Server started at http://localhost:${PORT}`);
})


