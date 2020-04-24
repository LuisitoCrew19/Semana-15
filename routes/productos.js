const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const Post = require('../models/productos');

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
        Codigo_Producto  : req.body.Codigo_Producto,
        Descripcion : req.body.Descripcion,
        Punto_ReOrden : req.body.Punto_ReOrden,
        Unidad_Medida : req.body.Unidad_Medida,
        Codigo_Producto_Detalle : req.body.Codigo_Producto_Detalle,
        Codigo_MP:req.body.Codigo_MP
        
     });
     try{
     const savedPost = await post.save();
      res.json(savedPost);
     }catch {
         res.json({message: err});
     }
     res.render('/productos', {data: req.body})
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
            {$set: {Codigo_Producto:req.body.Codigo_Producto}}
            
            );

            res.json(updatedPost)

    } catch (err) {
        res.json({message: err});
       }

       res.redirect('/productos');
   })


  module.exports = router;