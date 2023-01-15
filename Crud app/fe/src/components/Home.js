// import React from 'react'
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Form from "./Form";
import { useState , useEffect } from "react";
import ShowData from "./ShowData";
import axios from "axios"
import Popup from "./Popup";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
    }
    
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "30ch",
            "&:focus": {
                width: "30ch"
            }
        }
    }
}));


function Home() {
    // const [show, setShow] = useState(false)
    const [query,setQuery]=useState("")
    const [user,setUser]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/users/",
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            const obj = response.data
            console.log(obj);
            setUser(obj)

        }).catch((err) => console.log(err + "Incorrect Data"));

    },[])
    const search = (data) => {
        return data.filter(item=>item.name.toLowerCase().includes(query))
    }
    
    return (
        <>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Search >
                                <SearchIconWrapper>
                                    {/* <SearchIcon /> */}
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ "aria-label": "search" }}
                                    onChange={(e)=> setQuery(e.target.value)}
                                />
                            </Search>
                            {/* <Button variant="contained" color="success" onClick={() => setShow(!show)}>
                                Register
                            </Button> */}
                            <Popup></Popup>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
            {/* {
                show ? <Form></Form> : null
            } */}
            <ShowData data={search(user)}></ShowData>
        </>
    )
}

export default Home
