const mongoose=require("mongoose");

const sponsorShipSchema=new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String
    }
 
})
module.exports=mongoose.model("Sponsorship",sponsorShipSchema);