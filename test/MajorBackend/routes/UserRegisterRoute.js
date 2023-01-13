const userDataController=require("../controllers/userController");
//const emailPasswordControllers = require("../controllers/ReviewController");
const router=require("express").Router()

router.post("/",userDataController.addUserData);


//get Product Reviews 
router.get("/getUserData/:id",userDataController.getUserData)
router.post("/login",userDataController.loginUser)
router.post("/logoutUser",userDataController.logoutUser)
module.exports=router