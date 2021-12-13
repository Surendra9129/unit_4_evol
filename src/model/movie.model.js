const mongoose=require('mongoose');

const movieSchema=new mongoose.Schema(
    {
      actor: {type:String, required:true},
      language: {type:String, required:true},
      director: {type:String, required:true},
      poster_url: {type:String, required: true},
    },
    {
      versionKey:false,
      timestamps:true
    }
);

module.exports=mongoose.model('movie',movieSchema);