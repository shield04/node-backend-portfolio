'use strict'

var mongoose =  require('mongoose');
var app = require('./app');
//var port = 8080;
//var port = 3700;
var port = 8443;


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/portafolio')
mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
        .then(() => {
            console.log("Conexion a la base de datos establecida satisfactoriamente...");

            //Creacion del servidor
            app.listen(port, ()=>{
                console.log("servidor corriendo correctamente en la url: http://localhost:3700") //localhost
            });

        })
        .catch(err => console.log(err));