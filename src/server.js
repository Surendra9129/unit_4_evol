const port=5000;
const express=require('express');
const connect=require('./configs/db');
const app=express();
app.use(express.json());

module.exports=()=>{
    app.listen(port,async()=>{
        await connect();
        console.log(`runing on port ${port}`);
    });
}

