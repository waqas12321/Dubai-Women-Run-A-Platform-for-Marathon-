const express=require("express");
const router=express.Router();
const {teamData}=require("../controllers/team.js");
router.route("/team").get(teamData);
module.exports=router;