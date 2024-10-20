const express=require("express");
const  eventsData  = require("../controllers/events");
const router=express.Router();
router.route("/events").get(eventsData);
module.exports=router;