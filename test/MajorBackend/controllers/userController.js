//const { request, response } = require("express")
const { request, response } = require("express")
const db=require("../models")
//create main model

const UserData = db.UserData
const UserNameEmail=db.UserNameEmail
const sessionStorage = require('node-sessionstorage')

//main 
const addUserData=async(request,response)=>{
    
    let loginInfo={
        email:request.body.email,
        password:request.body.password
    }
    if(request.body.password==request.body.confirmPassword)
    {
        const data1 = await UserNameEmail.create(loginInfo)
        response.status(200).send(data1)
        if(data1 && data1.id)
        {
            let info={
                name:request.body.name,
                contact:request.body.contact,
                address:request.body.address,
                proffession:request.body.proffession ? request.body.proffession : "student",
                user_id:data1.id,
                role:1
                //like_status:request.body.like
            }
            const data =await UserData.create(info)
            //response.status(200).send(data)
        }
        
        
       

    }
    else{
        response.send("password not matches")
    }


}


//login functanility 

const loginUser=async(request,response)=>{
    const emailId=request.body.email;
    const password1=request.body.password;
    const data=await UserNameEmail.findOne({where:{email:emailId}})
    console.log(data)
    if(data.email==emailId && data.password==password1)
    {
        sessionStorage.setItem('useremail', emailId)
        response.send("user")
       // response.redirect("https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS")
    }
    else{
        response.send("No matches found..!")
    }
}


//findUser

//connect one to many relation product and review
const getUserData=async(request,response)=>{
    const id=request.params.id;
    const data=await UserNameEmail.findOne({
        include:[{
            model:UserData,
            as:"userData"
        }],
        where:{id:id}
    })
    response.status(200).send(data)
}

//logout user
const logoutUser = async (req, resp) => {
    
    sessionStorage.removeItem('email');

    resp.send("User logged out")
}
module.exports={
    getUserData,
    addUserData,
    loginUser,
    logoutUser
}
