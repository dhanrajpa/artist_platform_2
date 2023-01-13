const express=require("express");
const cors=require("cors")
const app=express()
var corOptions={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}



//middlewares
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routers
const router=require("./routes/UserRegisterRoute");
app.use("/api/users",router)

app.get("/hello",(request,response)=>{ 
    response.json({message:"hello project"})
})

//artist
const router1=require("./routes/ArtistRegRoute")
app.use("/api/artist",router1)

//event
const router3=require("./routes/EventByArtistRoute")
app.use("/api/events",router3)
//port
const PORT=process.env.PORT||8080

//
app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
})