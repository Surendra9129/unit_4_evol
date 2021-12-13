const express=require('express');
const show=require('../model/movie.model');
const router=express.Router();

router.get('/',async(req,res)=>{
    const new_show=await show.find({}).lean().exec();
    res.send(new_show);
});

router.get('/nearest',async(req,res)=>{
    const new_show=await show.find({}).lean().exec();
    res.send(new_show);
});

module.exports=router;