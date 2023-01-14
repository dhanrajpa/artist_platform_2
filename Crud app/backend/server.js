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
const router=require("./routes/userRoutes");
app.use("/api/users",router)

app.get("/hello",(request,response)=>{ 
    response.json({message:"hello project"})
})

//port
const PORT=process.env.PORT||8080

//
app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
})