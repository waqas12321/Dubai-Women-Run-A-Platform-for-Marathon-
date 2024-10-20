const mongoose=require("mongoose")
const Routes =require("../models/routes.js");
const routesData=async(req,resp)=>{
   try {
    const routesData=await Routes.find();
    resp.send(routesData)
   } catch (error) {
    resp.send(error);
    
   }
    
}
 module.exports= routesData;