
// Requires
const express = require("express")
const { 

 } = require('./routes')
const { initializeDB } = require('./db/initializeDB');
require('dotenv').config();
const cors = require("cors");
const {checkAdmin} = require('./db/createAdminEntity');



// App Creation
const app = express();
const PORT = process.env.PORT || 3001;

// Aplication Middlewares
app.use(express.json()) 
app.use(cors());

// Routes
// app.use("/tipo_articulo", TipoArticuloRouter)







app.listen(PORT, 
    async () => {
        await initializeDB();
        // await checkAdmin();
        console.log(` >>>>> 🚀 Server started at http://localhost:${PORT}`);
})


