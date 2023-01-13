import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-grid-dropdown/dist/style.css'
import { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";


import Footer from '../Footer';

const theme = createTheme();

    

function SignUser() {

    const history = useHistory();

    const [checkName, setName] = useState('');
    const [checkContact, setContact] = useState('');
    const [checkAddress, setAddress] = useState('');
    const [checkProffession, setProffession] = useState('');
    const [checkEmail, setEmail] = useState('');
    const [checkPassword, setPassword] = useState('');
    const [checkConfirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleContactChange = (e) => {
        setContact(e.target.value);
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const handleProffessionChange = (e) => {
        setProffession(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleconfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            name: checkName,
            contact: checkContact,
            address: checkAddress,
            proffession: checkProffession,
            email: checkEmail,
            password: checkPassword,
            confirmPassword: checkConfirmPassword
        }
        console.log(data)
        if(data.name==""||data.contact==""||data.address==""||data.proffession==""||data.email==""||data.password==""||data.confirmPassword=="")
        { 
            alert("Each Field is mandatory")
        }
        else{
            if(data.password==data.confirmPassword)
            {
            axios.post("http://localhost:8080/api/users/", data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response.data);
                history.push("/sign-in")
                alert("User Registered Successfully..!")

            }).catch((err) => console.log(err + "Incorrect Data"));
        }
        else{
            alert("Password Not Matches")
        }
        }


    };

    return (
        <div id='div_reg'>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="md" >
                    <CssBaseline />
                    <Box id="card"
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleNameChange}
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="FirstName"
                                        //value={formValues.username}
                                        autoFocus
                                        //onChange={handleValidatetChange}
                                    />
                                </Grid>



                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleContactChange}
                                        autoComplete="given-name"
                                        name="Contact"
                                        required
                                        fullWidth
                                        id="Contact"
                                        label="Contact"
                                        autoFocus
                                        //value={formValues.username}
                                        //onChange={handleValidatetChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleAddressChange}
                                        autoComplete="given-name"
                                        name="Address"
                                        required
                                        fullWidth
                                        id="Address"
                                        label="Address"
                                        autoFocus
                                        //value={formValues.username}
                                        //onChange={handleValidatetChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleProffessionChange}
                                        autoComplete="given-name"
                                        name="Profession"
                                        required
                                        fullWidth
                                        id="Profession"
                                        label="Profession"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleEmailChange}
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>


                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handlePasswordChange}
                                        required
                                        fullWidth
                                        name="Password"
                                        label="Password"
                                        type="Password"
                                        id="Password"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={handleconfirmPasswordChange}
                                        required
                                        fullWidth
                                        name="Confirm Password"
                                        label="Confirm Password"
                                        type="Confirm Password"
                                        id="Confirm Password"
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-start">
                                <Grid item>
                                    <Link href="http://localhost:3000/sign-in" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                <Footer />
            </ThemeProvider>

        </div>
    )
}


export default SignUser