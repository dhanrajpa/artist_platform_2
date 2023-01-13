const db = require("../models")
const sessionStorage = require('node-sessionstorage')
const artistEmailPassword = db.ArtistRegister
const artistDataUpload = db.ArtistUploads

// const multer = require('multer')
// const path = require('path')
const { response } = require("express")
//register 
const addArtist = async (req, res) => {
    let loginArtist = {
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        art: req.body.art,
        password: req.body.password,
        role:0


    }
    if (req.body.password == req.body.confirmPassword) {
        const data = await artistEmailPassword.create(loginArtist)
        res.status(200).send(data)
    }
    else {
        res.send("password not matches")
    }


}
//signIn User
const signInArtist = async (req, resp) => {
    let email = req.body.email
    let password = req.body.password;
    const artist = await artistEmailPassword.findOne({ where: { email: email } })
    if (email == artist.email && password == artist.password) {
        sessionStorage.setItem('email', email)
        resp.send("artist")

    }
    else{
        resp.send("you are not registered...")
    }
    //resp.status(200).send(sessionStorage.getItem("email"))
}

//getArtistData

const getArtistData = async (req, resp) => {
    const emailId = req.body.email;
    const user = await artistEmailPassword.findOne({ where: { email: emailId } })
    const data = await artistEmailPassword.findAll({
        include: [{
            model: artistDataUpload
        }],
        where: { id: user.id }
    })
    response.status(200).send(data)
}


//upload image--------------------------------api
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "Images")
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))

//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: '5000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if (mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// }).single('image')

//upload Video------------------------------------------------------------
// const storageVideo=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"Video")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+path.extname(file.originalname))

//     }
// })

// const uploadVideo = multer({
//     storage: storageVideo,
//     limits: { fileSize: '5000000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /mp4/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// }).single('video')
// //upload audio------------------------------------------------------------
// const storageAudio=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"Audio")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now()+path.extname(file.originalname))

//     }
// })

// const uploadAudio = multer({
//     storage: storageAudio,
//     limits: { fileSize: '5000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /mp3/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload mp3 only')
//     }
// }).single('audio')
//push data for that particular artist

const insertdataByArtist = async (req, resp) => {
    if (sessionStorage.getItem("email")) {
        const emailId = sessionStorage.getItem("email");
        const artist = await artistEmailPassword.findOne({ where: { email: emailId } })
        console.log(artist)
        const artistDataInfo = {
            image: req.body.image,
            //  video:req.file.path,
            //  audio:req.file.path,
            artist_id: artist.id
        }

        const sentData = await artistDataUpload.create(artistDataInfo)
        resp.status(200).send(sentData)
    }
    else {
        resp.status(200).send("LoginFirst")
    }
}


//get data of artist by searching their name
const getDataByeachArtistName = async (req, resp) => {
    const name = req.body.name
    const data = await artistEmailPassword.findOne(
        {
            include: [{
                model: artistDataUpload
            }],
            where: { name: name }
        }

    )
    resp.status(200).send(data)
}

const getAllDataFromArtist = async (req, resp) => {
    
    const data = await artistDataUpload.findAll()

    resp.status(200).send(data)
}
const logoutArtist = async (req, resp) => {
    
    sessionStorage.removeItem('email');

    resp.send("session logged out")
}
module.exports = {
    addArtist,
    insertdataByArtist,
    getArtistData,
    //upload,
    signInArtist,
    getDataByeachArtistName,
    getAllDataFromArtist,
    logoutArtist
    // uploadVideo,
    // uploadAudio
}