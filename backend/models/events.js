const mongoose=require("mongoose");

const eventsSchema=new mongoose.Schema({
    para1:{
        type:String
    },
    li1:{
       type:String 
    },
    li2:{
        type:String 
     },
     li3:{
        type:String 
     },
     li4:{
        type:String 
     },
     li5:{
        type:String 
     },
     li6:{
        type:String 
     },
     li7:{
        type:String 
     },
     li8:{
        type:String 
     },
     li9:{
        type:String 
     },
     li10:{
        type:String 
     },
     para2:{
        type:String
    },

})
module.exports=mongoose.model("Events",eventsSchema);