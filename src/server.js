const port=5000;
const express=require('express');
const connect=require('./configs/db');
const app=express();
const movie_controller=require('./controller/movie.controller');
const show_controller=require('./controller/show.controller');
app.use(express.json());
app.use('movies',movie_controller);
app.use('show',show_controller);

module.exports=()=>{
    app.listen(port,async()=>{
        await connect();
        console.log(`runing on port ${port}`);
    });
}

