import React, { useState } from 'react'

import Status from './Status';
import DialogueBox from './DialogueBox';
// import { Dialog } from '@mui/material';


function ReadOnly({ element, editClick }) {
    const [openModal, setOpenModal] = useState(false)

    const deleteConfirmPopup = (e) => {
        e.preventDefault();
        setOpenModal(true)

    }
    const cancelConfirmation = (e) => {
        e.preventDefault()
        setOpenModal(false)
    }

    return (
        <>
            {openModal ? <DialogueBox func={element.id} cancelConf={cancelConfirmation}></DialogueBox> : (
                <tr key={element.id}>
                    <td>{element.name}</td>
                    <td>{element.designation}</td>
                    <td>{element.technology}</td>
                    <td>{element.contact}</td>
                    <td>{element.address}</td>
                    <td>{element.status ? (<div id='online'><span

                    ></span></div>) : (<div id='offline'></div>)}

                    </td>
                    <td>
                        <button onClick={(event) => editClick(event, element)}>Edit</button> | <button onClick={deleteConfirmPopup}>Delete</button>
                    </td>
                </tr>

            )}






        </>
    )
}

export default ReadOnly
