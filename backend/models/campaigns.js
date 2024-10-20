const mongoose=require("mongoose")
const campaignSchema=new mongoose.Schema({
    heading:{
        type:String
    },
    title:{
        type:String
    },
    para:{
        type:String
    }
    ,data:{
        p1:{
            type:String

        },
        p2:{
            type:String

        },
        p3:{
            type:String

        },
        p4:{
            type:String

        },
        p5:{
            type:String

        },
        p6:{
            type:String

        },
        p7:{
            type:String

        },
        p8:{
            type:String

        },
        p9:{
            type:String

        },

        p10:{
            type:String

        },
      

    }
})
module.exports=mongoose.model("Campaign",campaignSchema);