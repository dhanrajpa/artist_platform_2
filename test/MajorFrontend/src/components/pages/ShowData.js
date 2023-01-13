import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
//import Header from "../Headers/Header";
//import URL from "../URL/url";
import "./showPost.css";

export default function Posts() {
const navigate=useNavigate()

  const [artistposts, setartistposts] = useState([]);

  const url = `http://localhost:8080/api/artist/getAllArtistData`;

  const getPosts = async () => {
    const response = await fetch(url);
    setartistposts(await response.json());
  };
  

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="post">
        <div className="container-fluid">
        <button id="btn1" type="button" class="btn btn-success" onClick={() => navigate("/selfposts")}>My Post</button> 
          {artistposts.map((artistposts) => {
            return (
             
              
              <div>
                <div class="card-deck">
                   <div className='row'></div>
                  <div className="card" width="18rem">
                     <img
                     id="img"
                      class="card-img-top"
                      src={artistposts.images}
                      alt="sample"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{artistposts.postName}</h5>
                      <p className="card-text">{artistposts.description}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
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
