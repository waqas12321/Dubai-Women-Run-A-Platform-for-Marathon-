const mongoose=require("mongoose");
const SPONSORSHIP=require("../models/sponsorship.js");
const sponsorshipData=async(req,resp)=>{

    try {
        const sponsorshipData= await SPONSORSHIP.find();
     
       resp.send(sponsorshipData);  
       
    } catch (error) {
        resp.send(error)

        
    }
}
module.exports={sponsorshipData};