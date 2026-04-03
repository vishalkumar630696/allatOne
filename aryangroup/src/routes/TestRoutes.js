const express=require("express")
const { readData, SingleData, CreateData, UpdateData, DeleteData } = require("../controllers/TestController")
const router=new express.Router()

router.get("/test",readData)
router.get("/test/:id",SingleData);
router.post("/test",CreateData );
router.put("/test/:id", UpdateData);
router.delete("/test/:id",DeleteData );

module.exports=router
