const eventController=require("../controllers/EventOrganizeController")

const router=require("express").Router()

router.post("/arrangeEvent",eventController.organizeEventByArtist)
router.post("/registerPeople",eventController.registeredPeople)
router.get("/showParticipantsData",eventController.getRegisteredPropleByEachEvent)
router.get("/getAll",eventController.getAllEvents)
module.exports=router