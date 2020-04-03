const express = require('express');
const router = express.Router();
const Post = require('../models/roles');

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
        Codigo_Rol: req.body.Codigo_Rol,
        Nombre_Rol: req.body.Nombre_Rol,
        Roles_Disponibles: req.body.Roles_Disponibles,
        Roles_Asignados: req.body.Roles_Asignados
        
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
            {$set: {Codigo_Rol:req.body.Codigo_Rol}}
            
            );

            res.json(updatedPost)

    } catch (err) {
        res.json({message: err});
       }
   })


  module.exports = router;