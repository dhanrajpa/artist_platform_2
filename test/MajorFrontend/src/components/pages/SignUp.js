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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Footer from '../Footer';
import { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";

const theme = createTheme();

function Signup() {


    
    const history = useHistory();
    const [checkName, setName] = useState('');
    const [checkContact, setContact] = useState('');
    const [checkEmail, setEmail] = useState('');
    const [checkArt, setArt] = useState('');
    const [checkPassword, setPassword] = useState('');
    const [checkConfirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleContactChange = (e) => {
        setContact(e.target.value);
    }

    const handleArtChange = (e) => {
        setArt(e.target.value);
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
            email: checkEmail,
            art:checkArt,
            password: checkPassword,
            confirmPassword: checkConfirmPassword
        }
        console.log(data)
        if(data.name==""||data.contact==""||data.email==""||data.art==""||data.email==""||data.password==""||data.confirmPassword=="")
        { 
            alert("Each Field is mandatory")
        }
        else{
            if(data.password==data.confirmPassword)
            {
        axios.post("http://localhost:8080/api/artist/", data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response.data);
                history.push("/sign-in")

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
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    onChange={handleContactChange}
                                        required
                                        fullWidth
                                        name="Contact"
                                        label="Contact"
                                        type="Contact"
                                        id="Contact"
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
                                    onChange={handleArtChange}
                                        autoComplete="given-name"
                                        name="Art Form"
                                        required
                                        fullWidth
                                        id="Art Form"
                                        label="Art Form"
                                        autoFocus
                                    />
                                </Grid>


                        


                                



                                <Grid item xs={12}>
                                    <TextField
                                    onChange={handlePasswordChange}
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    onChange={handleconfirmPasswordChange}
                                        required
                                        fullWidth
                                        name="Confirm password"
                                        label="Confirm Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
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

export default Signup;

