import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    max-width: 90%;
    width: 80%;
    margin: 0 auto;
    background-color: white;
    border-radius: 1rem;
    padding: 0.5rem;
    box-shadow: 10px 50px 50px rgba(0, 0, 0, 0.5);
`;

const Test = styled.button`
  background: #0B3D91;
  border-radius: 10px;
  border: 1px solid #FC3D21;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  height: 45px;
  width: 20%;
  font-size: 1.25rem;
`

const TopPic = styled.img`
margin: 0 35%;
width: 200px;
height: 200px;
`;

const App = () => {

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
    <Container>
      <p>
      <TopPic img src="http://choosewashingtonstate.com/wp-content/uploads/2017/04/NASALogo-1.jpg"></TopPic>
      <Test>Home</Test> <Test>About Us</Test> <Test>Contact</Test>
      <h1>NASA picture of the day!</h1>
      <h2>{nasaImg.title}</h2>
      <h2>{nasaImg.date}</h2>
      <img src={`${nasaImg.url}`}/>
      <p class="expl-1">{nasaImg.explanation}</p>
      <Test>Home</Test> <Test>About Us</Test> <Test>Contact</Test>
      </p>
    </Container>
  );
}



export default App;