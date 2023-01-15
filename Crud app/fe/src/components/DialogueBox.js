import { borderColor } from '@mui/system'
import React, { useState } from 'react'
import axios from "axios"
import "../css/showData.css"

function DialogueBox({ func, cancelConfirm }) {
    const [confirm, setConfirm] = useState(false)
    const id = func
    const giveConfirmation = () => {
        setConfirm(true)
    }
    if (confirm) {
        // const deleteRow = (rowId) => {
        // console.log("into delete" + `${rowId}`);
        // const id = func.id
        {
            axios.delete(`http://localhost:8080/api/users/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },

                })
                .then((response) => {

                }).catch((err) => console.log(err + "Incorrect Data"));
        }
    }

    return (
        <tr>
            <div id='popup'>
                <div style={
                    {
                        backgroundColor: "lightblue",
                        // border:"5px",
                        borderColor: "black",
                        borderRadius: "5px",
                        height: "100px",


                    }
                }>
                    <h3>Are you sure want to delete .. ?</h3>
                    <button onClick={cancelConfirm}>Cancel</button>
                    <button onClick={giveConfirmation}>Delete</button>
                </div>

            </div>
        </tr>


    )
}

export default DialogueBox
