const express=require('express');
const movie=require('../model/movie.model');
const router=express.Router();

router.post('/',async(req,res)=>{
    const new_movie= await movie.create(req.body)
    res.status(201).json({new_movie})
});

router.get('/',async(req,res)=>{
    const new_movie=await movie.find({}).lean().exec();
    res.send(new_movie);
});

module.exports=router;

