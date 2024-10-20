const express=require("express");
const  routesData  = require("../controllers/routes");
const router=express.Router();
router.route("/routes").get(routesData);
module.exports=router;