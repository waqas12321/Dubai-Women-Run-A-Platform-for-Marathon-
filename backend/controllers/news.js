const mongoose=require("mongoose")
const News =require("../models/news.js");
const newsData=async(req,resp)=>{
   try {
    const newsData=await News.find();
    resp.send(newsData)
   } catch (error) {
    resp.send(error);
    
   }
    
}
 module.exports= newsData;