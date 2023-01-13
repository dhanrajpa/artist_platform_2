import React, { useState } from "react";

import axios from "axios";

import "./Newpost.css";
import { useHistory } from "react-router-dom";

export default function Newpost() {
    const history = useHistory();


  const [images, setImages] = useState("");

  const handleEmailChange = (e) => {
    setImages(e.target.value);
    
  }
  const handleArrangeEvent = (e) => {
    history.push("/artistdb")
    
  }
const handleSubmit = async (e) => {
    e.preventDefault()

    
    
    
    
    let data =
    {
      image:images
    }

    console.log(data)
    axios.post("http://localhost:8080/api/artist/insertData", data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);


      }).catch((err) => console.log(err + "Incorrect Data"));


  };
return (
    <div>
    <form>
      
      <div id="post">
        <br />
        <h1 >Add new Posts</h1>
        <div className="outerdiv-emp-form">
          <div className="mb-3"></div>
          
          <br />
          <label style={{ float: "left" }}>Add Image: </label>
           <input
            type="text"
            placeholder="Image URL"
            value={images}
            onChange={handleEmailChange}
            className="form-control form-control-sm"
          ></input><br/>
        </div>
        <button type="button" onClick={handleSubmit} className="btn btn-sm btn-success">
          Add Posts
        </button>
        <button type="button" onClick={handleArrangeEvent} className="btn btn-sm btn-success">
          Add Event
        </button>
      </div>
      </form>
    </div>
  );
}
