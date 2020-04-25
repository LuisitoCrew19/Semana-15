if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}


const express = require('express');
const app= express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require ('express-flash')
const session = require ('express-session')
const methodOverride = require ('method-override')



const initializedPassport = require('./passport-config')
initializedPassport(
  passport, 
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []
require('dotenv/config');

app.use(bodyParser.json());


app.set('view-engine','ejs');
app.use(express.urlencoded({extended: false}));
app.use(flash())
app.use(session({
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.engine('html', require('ejs').renderFile);
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
const clientesRoute = require('./routes/clientes');
const cpmRoute = require('./routes/crear_pedidos_materia');

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
app.use('/clientes', clientesRoute);
app.use('/crear_pedidos_materia', cpmRoute);



//routes



//app.use("/", (req, res) => {
  //res.sendFile(__dirname + "/bodegas.html");
 //});

 app.get("/", checkAuthenticated, (req, res) => {
  res.render('../bodegas.html');
 });

 app.get("/login", checkNotAuthenticated,(req, res) => {
  res.render('login.ejs');
 });

 app.post("/login", checkNotAuthenticated,passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
 }))

 app.get("/register", checkNotAuthenticated,(req, res) => {
  res.render('register.ejs');
 });

 app.post("/register", checkNotAuthenticated ,async (req, res) => {
   try{
      const hashedPasssword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPasssword
        
      })

      res.redirect('/login')
   }catch{
      res.redirect('/register')
   }
 });

 app.delete('/logout', (req,res) => {
   req.logout()
   res.redirect('/login')
 })

 function checkAuthenticated(req, res, next){
   if(req.isAuthenticated()){
     return next()
   }
   res.redirect('login')
 }

 function checkNotAuthenticated(req, res, next){
  if(req.isAuthenticated()){
   return res.redirect('/')
  }
  next()
 }

//conectar a bd

mongoose.connect(process.env.DB_CONN , { useNewUrlParser: true }, () =>
          console.log('connected to DB')
  );

//listen()
app.listen(3000);