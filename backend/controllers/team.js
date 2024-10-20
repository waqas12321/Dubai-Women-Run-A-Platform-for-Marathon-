const mongoose=require("mongoose");
const TEAM=require("../models/team.js");
const teamData=async(req,resp)=>{

    try {
        const teamData= await TEAM.find();
     
       resp.send(teamData);  
       
    } catch (error) {
        resp.send(error)

        
    }
}
module.exports={teamData};