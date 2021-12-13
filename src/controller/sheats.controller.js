const express=require('express');
const sheat=require('../model/movie.model');
const router=express.Router();

router.post('/',async(req,res)=>{
    const new_sheat=await sheat.find({}).lean().exec();
    res.status(201).json({new_sheat});
})

router.get('/',async(req,res)=>{
    const new_sheat=await sheat.find({}).lean().exec();
    res.send(new_sheat);
});

router.get('/nearest',async(req,res)=>{
    const new_sheat=await sheat.find({}).lean().exec();
    res.send(new_sheat);
});


module.exports=router;