const express = require('express');
const app= express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//import 

const postsRoute = require('./routes/posts');
const rolesRoute = require('./routes/roles');
const eventosRoute = require('./routes/eventos');
const parametrosRoute = require('./routes/parametros');
const consecutivosRoute = require('./routes/consecutivos');
const bodegasRoute = require('./routes/bodegas');
const camionesRoute = require('./routes/camiones');
const tpmRoute = require('./routes/tipos_materia_prima');
const mpRoute = require('./routes/materia_prima');
const proveedoresRoute = require('./routes/proveedores');
const productosRote = require('./routes/productos');

app.use('/posts', postsRoute);
app.use('/roles', rolesRoute);
app.use('/eventos', eventosRoute)
app.use('/parametros', parametrosRoute);
app.use('/consecutivos', consecutivosRoute);
app.use('/bodegas', bodegasRoute);
app.use('/camiones', camionesRoute);
app.use('/tipos_materia_prima', tpmRoute);
app.use('/materia_prima', mpRoute);
app.use('/proveedores', proveedoresRoute);
app.use('/productos', productosRote);
//routes

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/tipo_materia_prima.html");
 });



//conectar a bd

mongoose.connect(process.env.DB_CONN , { useNewUrlParser: true }, () =>
          console.log('connected to DB')
  );

//listen()
app.listen(3000);