const artistRegController=require("../controllers/ArtistController");

const router=require("express").Router()

router.post("/",artistRegController.addArtist)
router.post("/insertData",artistRegController.insertdataByArtist)
router.get("/getDataByArtist",artistRegController.getArtistData);
router.post("/signinArtist",artistRegController.signInArtist)
router.get("/getDataOfArtistByName",artistRegController.getDataByeachArtistName)
router.get("/getAllArtistData",artistRegController.getAllDataFromArtist)
router.post("/logoutArtist",artistRegController.logoutArtist)
module.exports=router 