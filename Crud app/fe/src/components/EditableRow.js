import React, { useEffect, useState } from 'react'
import axios from "axios"


function EditableRow({editabledata}) {
    const [updatedData,setUpdatedData]=useState(
        {name:editabledata.name,
        designation:editabledata.designation,
        technology:editabledata.technology,
        contact:editabledata.contact,
        address:editabledata.address,
        status:editabledata.status})
    const editedData = (e) =>{
        e.preventDefault()
        let data = {
            name:updatedData.name,
            designation: updatedData.designation,
            technology: updatedData.technology,
            contact: updatedData.contact,
            address: updatedData.address,
            status: updatedData.status
        }
        axios.put(`http://localhost:8080/api/users/${editabledata.id}`,data,
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            window.location.reload(true)
        }).catch((err) => console.log(err + "Incorrect Data"));
        console.log(data);


    }
    return (
        <tr>
            <td><input type="text" placeholder={editabledata.name} onChange={e=>setUpdatedData({...updatedData,name:e.target.value})}></input></td>
            <td><input type="text" placeholder={editabledata.designation } onChange={e=>setUpdatedData({...updatedData,designation:e.target.value})}></input></td>
            <td><input type="text" placeholder={editabledata.technology} onChange={e=>setUpdatedData({...updatedData,technology:e.target.value})}></input></td>
            <td><input placeholder={editabledata.contact} onChange={e=>setUpdatedData({...updatedData,contact:e.target.value})}></input></td>
            <td><input type="text" placeholder={editabledata.address} onChange={e=>setUpdatedData({...updatedData,address:e.target.value})}></input></td>
            <td><input type="text" placeholder={editabledata.status } onChange={e=>setUpdatedData({...updatedData,status:e.target.value})}></input></td>
            <td><button onClick={editedData}>save</button> | <button>cancel</button></td>
            <td></td>
        </tr>
    )
}
 
export default EditableRow
