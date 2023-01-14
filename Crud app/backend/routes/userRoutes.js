const userDataController=require("../controller/userController");
const router=require("express").Router()

router.post("/",userDataController.addUserData);
router.get("/",userDataController.getUserData);
router.delete("/:id",userDataController.deleteUser);
router.put("/:id",userDataController.editedData);


//find by name  
// router.get("/getUserData",userDataController.getUserData)

module.exports=router