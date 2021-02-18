// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { SERVER } = require('./config/env.js');

const app = express();
const database = require('./config/database');
const routes = require('./routes/index');

var corsConfig = {
    origin: "http://localhost:3001"
};

app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Agrega las rutas del archivo /routes/index.js
app.use("/", routes);


database.sequelize.sync();


app.listen(SERVER.PORT, () => {
    console.log(`El server se esta ejecutando en el puerto: ${SERVER.PORT}`);
});