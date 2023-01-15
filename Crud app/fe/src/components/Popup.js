import React, { useState } from 'react'
// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"

function Popup() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [contact, setContact] = useState();
    const [designation, setDesignation] = useState('');
    const [technology, setTechnology] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleContactChange = (e) => {
        setContact(e.target.value);
    }

    const handleDesignationChange = (e) => {
        setDesignation(e.target.value);
    }
    const handleTechnologyChange = (e) => {
        setTechnology(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        let data = {
            name: name,
            designation: designation,
            technology: technology,
            contact: contact,
            address: address,
            status: status
        }

        console.log(data)
        if (data.name == "" || data.designation == "" || data.technology == "" || data.contact == "" || data.address == "") {
            alert("no data to register")
        }
        else {
        
            axios.post("http://localhost:8080/api/users/", data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
               window.location.reload(true)
            }).catch((err) => console.log(err + "Incorrect Data"));
        alert("Registered Successfully....!")
        }

    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>
            <div>
                <Button variant="contained" color='error' onClick={handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle> Registration Form </DialogTitle>
                    <div>
                        <div className="App">
                            <form>
                                <TextField
                                    onChange={handleNameChange}
                                    style={{ width: "450px", margin: "15px" }}
                                    type="text"
                                    label="Name"
                                    variant="outlined"

                                />
                                <br />
                                <TextField
                                    style={{ width: "450px", margin: "15px" }}
                                    type="text"
                                    label="Designation"
                                    variant="outlined"
                                    onChange={handleDesignationChange}
                                />
                                <br />
                                <TextField
                                    style={{ width: "450px", margin: "15px" }}
                                    type="text"
                                    label="Technology"
                                    variant="outlined"
                                    onChange={handleTechnologyChange}
                                />
                                <br />
                                <TextField
                                    style={{ width: "450px", margin: "15px" }}
                                    type="text"
                                    label="Mobile Number"
                                    variant="outlined"
                                    onChange={handleContactChange}
                                />
                                <br />
                                <TextField
                                    style={{ width: "450px", margin: "15px" }}
                                    type="text"
                                    label="Address"
                                    variant="outlined"
                                    onChange={handleAddressChange}
                                />
                                <br />
                                <TextField
                           
                           style={{ width: "450px", margin: "15px" }}
                                    type="text"
                                    label="Status"
                                    variant="outlined"
                                    onChange={handleStatusChange}
                                />
                                <br />

                           </form>
                        </div>

                    </div>

                    <DialogActions>
                        <Button onClick={handleClose} color="error">Cancel</Button>
                        <Button onClick={handleSubmit} color="primary">Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default Popup
