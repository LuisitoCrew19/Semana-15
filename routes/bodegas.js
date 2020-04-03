const express = require('express');
const router = express.Router();
const Post = require('../models/bodegas');

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
   router.post('/', async (req,res) => {
     const post = new Post({
        Codigo_Bodega : req.body.Codigo_Bodega,
        Nombre : req.body.Nombre,
        Nombre_Corto : req.body.Nombre_Corto,
        Alias : req.body.Alias,
        Ubicacion : req.body.Ubicacion,
        Unidad_Medida : req.body.Unidad_Medida,
        Tipo_Bodega : req.body.Tipo_Bodega,
        Espacio_Bodega : req.body.Espacio_Bodega

     });
     try{
     const savedPost = await post.save();
      res.json(savedPost);
     }catch{
         res.json({message: err});
     }
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
            {$set: {Codigo_Bodega:req.body.Codigo_Bodega}}
            
            );

            res.json(updatedPost)

    } catch (err) {
        res.json({message: err});
       }
   })


  module.exports = router;