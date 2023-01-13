const db = require("../models")
const artistEmailPassword = db.ArtistRegister
const artistEvent=db.ArtistEventTable
const regPeopleDetails=db.RegisteredPeopleData
const sessionStorage = require('node-sessionstorage')

const organizeEventByArtist=async(req,resp)=>{
    if (sessionStorage.getItem("email")) {
        const emailId = sessionStorage.getItem("email");
        const artist = await artistEmailPassword.findOne({ where: { email: emailId } })
        let eventData={
            event_name:req.body.eventName,
            event_fees:req.body.fees,
            registration_count: req.body.reg_count,
            artist_id:artist.id,
        }
        const data=await artistEvent.create(eventData)
        resp.status(200).send(data)
    }
    else
    {
        resp.send("login first")
    }
    
}

const registeredPeople=async(req,resp)=>{
    const eventName=req.body.eventName
    const event=await artistEvent.findOne({where:{event_name:eventName}})
    let registerData={
        participant_name:req.body.name,
        participant_email:req.body.email,
        transection_status:req.body.tr_status,
        event_id:event.id
    }
    let data = await regPeopleDetails.create(registerData)
    resp.status(200).send(data)
}

const getRegisteredPropleByEachEvent=async(req,resp)=>{
    const event_name=req.body.event_name
    const participantsData=await artistEvent.findOne({where:{event_name:event_name}})
    const data=await artistEvent.findOne({
        include:[{
            model:regPeopleDetails
        }],
        where:{id:participantsData.id}
        
    })
    resp.status(200).send(data)
}
const getAllEvents=async(req,resp)=>{
    const email=sessionStorage.getItem("email");
    const artistId=await artistEmailPassword.findOne({where:{email:email}})
    const data=await artistEvent.findAll({where:{id:artistId.id}})
    resp.status(200).send(data)
}
module.exports={
    organizeEventByArtist,
    registeredPeople,
    getRegisteredPropleByEachEvent,
    getAllEvents
}