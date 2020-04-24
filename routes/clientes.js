const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const Post = require('../models/clientes');

var urlencodedParer=bodyParser.urlencoded({ extended: true });

//get back all posts
router.get('/', async (req,res) =>{
    try{
         const posts = await Post.find();
         res.json(posts);
    } catch (err) {
         res.json({message: err});
    }

});

//submit posts
router.post('/', urlencodedParer ,async (req,res) => {
    const post = new Post({
       Codigo_Identificacion : req.body.Codigo_Identificacion,
       Fecha_Ingreso : req.body.Fecha_Ingreso,
       Documento_Identidad : req.body.Documento_Identidad,
       Primer_Apellido : req.body.Primer_Apellido,
       Segundo_Apellido : req.body.Segundo_Apellido,
       Nombre : req.body.Nombre,
       Estado : req.body.Estado,
       Telefonos : req.body.Telefonos,
       Correo_Electronico : req.body.Correo_Electronico,
       Direccion : req.body.Direccion

    });
    try{
    const savedPost = await post.save();
     res.json(savedPost);
    }catch{
        res.json({message: err});
    }

    res.render('/clientes', {data: req.body})

  });

  //Specific post
  router.get('/:postId', async (req,res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);

    } catch (err){
          res.json({message: err});
    }
});

//Delete post

router.delete('/:postId', async (req,res) =>{
    try{
    const removedPost = await Post.remove({_id: req.params.postId});
    res.json(removedPost);
    } catch (err) {
     res.json({message: err});
    }
});

//updatePost

router.patch('/:postId', async (req,res) => {
    try{
     const updatedPost = await Post.updateOne(
         {_id: req.params.postId}, 
         {$set: {Codigo_Identificacion:req.body.Codigo_Identificacion}}
         
         );

         res.json(updatedPost)

 } catch (err) {
     res.json({message: err});
    }
    res.redirect('/clientes');
});


module.exports = router;


