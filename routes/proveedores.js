const express = require('express');
const router = express.Router();
const Post = require('../models/Proveedores');

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
        Codigo_Proveedor: req.body.Codigo_Proveedor,
        Cedula : req.body.Cedula,
        Nombre_Proveedor: req.body.Nombre_Proveedor,
        Correo_Electronico: req.body.Correo_Electronico,
        Contacto: req.body.Contacto,
        Telefono_Contacto:req.body.Telefono_Contacto,
        Direccion:req.body.Direccion


        
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
            {$set: {Codigo_Proveedor:req.body.Codigo_Proveedor}}
            
            );

            res.json(updatedPost)

    } catch (err) {
        res.json({message: err});
       }
   })


  module.exports = router;