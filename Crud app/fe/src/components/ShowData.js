import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import "../css/showData.css"
import EditableRow from './EditableRow';


import ReadOnly from './ReadOnly';

const ShowData = ({ data }) => {
    const [editUserData, setEditUserData] = useState(null)
    

    const handleEditClick = (evet, data) => {
        evet.preventDefault()
        setEditUserData(data.id)
    }

    return (

        <form>
            <div className='app-Container'>
                <table>
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Designation</th>
                            <th>Technology</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Action</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((element) => (

                                <Fragment>
                                    {
                                        editUserData === element.id ? (<EditableRow editabledata={element}></EditableRow>) :
                                            (<ReadOnly element={element} editClick={handleEditClick} />)
                                    }


                                </Fragment>


                            ))
                        }

                    </tbody>
                </table>
            </div>
        </form>
    )
}

export default ShowData
