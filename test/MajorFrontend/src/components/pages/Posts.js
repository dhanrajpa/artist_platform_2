import React, { useState, useEffect } from "react";
//import axios from "axios";
//import Header from "../Headers/Header";
//import URL from "../URL/url";
import "./Posts.css";
//import '../services/Navbar.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

//import { useState } from "react";
import axios from "axios"

export default function Posts() {
  const history = useHistory();
  const [artistposts, setartistposts] = useState([]);

  const url = `http://localhost:8080/api/artist/getAllArtistData`;

  const getPosts = async () => {
    const response = await fetch(url);
    setartistposts(await response.json());
  };

  useEffect(() => {
    getPosts();
  }, []);

  //----------------
  const handleLogout=(event)=>{
    axios.post("http://localhost:8080/api/artist/logoutArtist",
    {
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        console.log(response.data);
        history.push("/")

    }).catch((err) => console.log(err + "Incorrect Data"));
  }

  return (
    <>
        
     <Paper 
      component="form"
      sx={{ p: '6px 6px', display: 'flex', alignItems: 'left', width: 500, height:50, marginLeft: '250px' }}
    >
        <InputBase
        sx={{ ml: 2, flex: 2 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
    </Paper>

    <Button variant="contained" style={{flex:1,
    flexDirection:'row',
    alignItems:'right',
    justifyContent:'right',}} onClick={handleLogout}>
                                Logout
                            </Button> 
      <div className="post">
        <div className="container-fluid">
          {artistposts.map((i) => {
            return (
              <div>
                <div className="card-deck">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={i.image}
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Art - {i.art}</h5>
                      <p className="card-text">Artist - {i.name}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          created at {i.createdAt}
                        </small>
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
