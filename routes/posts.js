const express = require('express');
const router = express.Router();
const Post = require('../models/usuarios');

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
        Email : req.body.Email,
        User : req.body.User,
        Nombre : req.body.Nombre,
        Rol : req.body.Rol,
        Password : req.body.Password,
        Estado : req.body.Estado
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
            {$set: {Email:req.body.Email}}
            
            );

            res.json(updatedPost)

    } catch (err) {
        res.json({message: err});
       }
   })


  module.exports = router;