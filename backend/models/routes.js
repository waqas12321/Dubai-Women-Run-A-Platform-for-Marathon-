const mongoose=require("mongoose");

const routesSchema=new mongoose.Schema({
    heading:{
        type:String
    },
    image:{
       type:String 
    }
})
module.exports=mongoose.model("Routes",routesSchema);