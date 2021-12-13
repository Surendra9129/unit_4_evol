const mongoose=require('mongoose');

const showSchema=new mongoose.Schema(
    {
      timing: {type:Number, required:true},
      movie_ids:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"movie",
        required:true
    }],
      total_sheats: {type:Number, required:true},
      screen_ids:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"sereen",
        required:true
    }]
      
    },
    {
      versionKey:false,
      timestamps:true
    }
);

module.exports=mongoose.model('show',showSchema);