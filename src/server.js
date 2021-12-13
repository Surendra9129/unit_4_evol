const port=5001;
const express=require('express');
const connect=require('./configs/db');
const app=express();
const movie_controller=require('./controller/movie.controller');
const show_controller=require('./controller/show.controller');
const sheat_controller=require('./controller/sheats.controller');

app.use(express.json());
app.use('movies',movie_controller);
app.use('shows',show_controller);
app.use('sheats',sheat_controller);
module.exports=()=>{
    app.listen(port,async()=>{
        await connect();
        console.log(`runing on port ${port}`);
    });
}

