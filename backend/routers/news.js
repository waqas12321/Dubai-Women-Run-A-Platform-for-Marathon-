const express=require("express");
const  newsData  = require("../controllers/news");
const router=express.Router();
router.route("/news").get(newsData);
module.exports=router;