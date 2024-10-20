const mongoose=require("mongoose")
const teamSchema=new mongoose.Schema({
  
    data:{
      img:{
        type:String
      },
      name:{
        type:String
      },
      designation:{
        type:String
      },
      para:{
        type:String
      },
    

    },
    featured:{
      type:String
    }
})
module.exports=mongoose.model("Team",teamSchema);