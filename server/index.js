const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require("mongoose");
const cors = require('cors');
const config = require('./config');

// Parametros de conexion
const USER = "adminRisto";
const PASSWORD = "lcxOMU85cUX0KulZ";
const DATA_BASE = "ristorapp";

// Preparando cadena de conexion
const CONECTOR = `mongodb+srv://${USER}:${PASSWORD}@ristorapp.tuyx0.mongodb.net/${DATA_BASE}?retryWrites=true&w=majority`;
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

console.log("URL: " + CONECTOR)

// Abriendo la conexión a mongoDB Atlas
connect(CONECTOR, OPTIONS, MongoError => {
    // si algo sale mal mostramos el error y paramos el servidor
    if (MongoError) {
        console.error(MongoError);
        process.exit(1);
    }
}
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(cors({
//    origin: config.cors.origin,
//    credentials: Boolean(config.cors.credentials)
//}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,  Authorization");
  res.header("Access-Control-Request-Headers", "Origin, X-Requested-With, Content-Type, Accept,  Authorization");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
  next();
});

const api = require('./api/v1');

app.use('/api', api);
app.use('/api/v1', api);

app.use('/', express.static('public/api'))

app.use((req, res, next) =>{
    res.status(404);
    res.json({ 
        message: "Not found"
    });
});

app.use((err, req, res, next) =>{
    res.status(500);
    res.json({ 
        message: err.message
    });
});

module.exports = app;