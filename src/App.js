import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {

  const [nasaImg, setImg] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const nasaData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=ZzLgOgfo6E53p1V82P8OUWw85SVcFBfyeXxFAaTe')
        console.log(nasaData);
        setImg(nasaData.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [])
  console.log(nasaImg);

  return (
    <div className="App">
      <p>
      <h1>NASA picture of the day!</h1>
      <h2>{nasaImg.title}</h2>
      <h2>{nasaImg.date}</h2>
      <p class="expl-1">{nasaImg.explanation}</p>
      <img src={`${nasaImg.url}`} />
      </p>
    </div>
  );
}

export default App;
