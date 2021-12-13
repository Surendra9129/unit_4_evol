const mongoose=require('mongoose');

const sheatSchema=new mongoose.Schema(
    {
        show_ids:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:"show",
            required:true
        }]
    },
    {
      versionKey:false,
      timestamps:true
    }
);

module.exports=mongoose.model('sheat',sheatSchema);