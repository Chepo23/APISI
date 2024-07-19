const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConexion = require("./conexion");
const usuarios = require("./routes/usuarios");
const datos = require("./routes/datos");

const app = express();
app.use(bodyParser.json());

// Configuración de CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials", true);

    // Manejo de solicitudes OPTIONS
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

// Rutas de la API
app.use("/usuarios", usuarios);
app.use("/datos", datos);

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
