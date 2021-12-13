const express=require('express');
const movie=require('../model/movie.model');
const router=express.Router();

router.post('/',upload.any("poster_url"),async(req,res)=>{
    const filePath=req.files.map((file)=>file.path);
    const new_user=await user.create({
        name: req.body.name,
        actors: req.body.actors,
        languages:req.body.languages,
        director: req.body.director,
        poster_url: filePath
    })
   return  res.status(201).json({new_user});
});

router.get('/',async(req,res)=>{
    const new_movie=await movie.find({}).lean().exec();
    res.send(new_movie);
});

module.exports=router;

