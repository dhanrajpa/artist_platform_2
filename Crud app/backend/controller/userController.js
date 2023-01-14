//const { request, response } = require("express")
//const { request, response } = require("express")
const db=require("../model")
//create main model

const userData = db.UserData

//main 
const addUserData=async(req,resp)=>{
    
    
            let info={
                name:req.body.name,
                designation:req.body.designation,
                technology:req.body.technology,
                contact:req.body.contact,
                address:req.body.address,
                
                status:req.body.status
            }
            const data =await userData.create(info)
            resp.status(200).send(data)
        }
const getUserData=async(req,resp)=>{
            const data =await userData.findAll()
            resp.status(200).send(data)
        }
const deleteUser=async(req,resp)=>{
    const id=req.params.id
    await userData.destroy({where:{id:id}})
    resp.status(200).send("user deleted..")
}       
    
const editedData = async(req,resp)=>{
    let data={
        name:req.body.name,
        designation:req.body.designation,
        technology:req.body.technology,
        contact:req.body.contact,
        address:req.body.address,
        status:req.body.status

    }
    const id=req.params.id
    await userData.update(data,{where:{id:id}})
    resp.status(200).send("user updated..")
}
       




module.exports={
      
    addUserData,
    getUserData,
    deleteUser,
    editedData

}
