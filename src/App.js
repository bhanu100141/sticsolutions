import React, { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [images, setImages] = useState("");
  const [result, setResult] = useState([]);


  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${images}&client_id=4UhQL7IdZ55_AGB-WhQQNVlxTwun4XNQI0lXn6L-gqM`
      )
      .then((response) => {
        // console.log(response.data);
        
        setResult(response.data.results);
      });
  };

 
  return (
    <>
      <div className="main-container text-center">
        <h1 className="title ">Image Search</h1>
        <div className="second-container">
          <div className="container text-center my-5">
            <input
              type="search"
              className="form-control"
              value={images}
              placeholder="Search here....."
              onChange={(e) => {
                setImages(e.target.value);
              }}
            />
            <div>
              <button
                type="submit"
                onClick={changePhoto}
                className="btn btn-primary my-2"
              >
                Search
              </button>
              </div>
              </div>
              <div className="image-filter">
                 <div>Mountain</div>
                 <div>Flowers</div>
                 <div>Beachs</div>
                 <div>Cities</div>
              </div>
            
          
        </div>
      
      <div className="container">
        <div class="row text-center text-lg-start">
          {result.map((value) => {
            return (
           
              <div class=" images col-lg-3 col-md-4 col-6 ">
                <img
                  class="img-fluid img-thumbnail d-block mb-4 h-100"
                  src={value.urls.small}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
