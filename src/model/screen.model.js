const mongoose=require('mongoose');

const screenSchema=new mongoose.Schema(
    {
      name: {type:String, required:true},
      theater_ids:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"theater",
        required:true
    }]
    },
    {
      versionKey:false,
      timestamps:true
    }
);

module.exports=mongoose.model('screen',screenSchema);