const mongoose=require("mongoose")
const Events =require("../models/events.js");
const eventsData=async(req,resp)=>{
   try {
    const eventsData=await Events.find();
    resp.send(eventsData)
   } catch (error) {
    resp.send(error);
    
   }
    
}
 module.exports= eventsData;