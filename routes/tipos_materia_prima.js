const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const Post = require('../models/tipos_materia_prima');

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
        Codigo_TPM: req.body.Codigo_TPM,
        Descripcion_TPM: req.body.Descripcion_TPM
       
     });
     try{
     const savedPost = await post.save();
      res.json(savedPost);
     }catch{
         res.json({message: err});
     }
     res.render('/tipos_materia_prima', {data: req.body})
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
            {$set: {Codigo_TPM:req.body.Codigo_TPM}}
            
            );

            res.json(updatedPost)

    } catch (err) {
        res.json({message: err});
       }

       res.redirect('/tipos_materia_prima');
   });


  module.exports = router;