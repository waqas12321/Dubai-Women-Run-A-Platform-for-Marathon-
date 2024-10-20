const express=require("express");
const {sponsorshipData}=require("../controllers/sponsorship.js");
const router=express.Router();
router.route("/sponsorship").get(sponsorshipData);
module.exports=router;