import React, { useState, useEffect, useMemo } from "react";
import './App.css';
import Header from "./component/Header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

export default function App() {

  return (

    <div className="App">
      <Header />

      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <Button color="success" variant="contained" color = "error" >
              <AddIcon />
          </Button>
        </Stack>
      </div>

    </div>
  );
};











































{/* <Header />
<div className="main">
  {
    MovieData.map((ele, index) => {
      return (
        <Movie
          title={ele.Title}
          poster = {ele.Images[1]}
          year = {ele.Year}
        />
      )
    })
  }
</div> */}



























// let key = "726289ec156b0e5c8e53ce64db4a1b2f";
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);

//   const getWeather = () =>
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&apiid=${key}`)
//       .then((response) => response.json())
//       .then((data) => console.log(data)) //setWeather(data))
//       .catch((error) => console.error(error))


//   return (
//     <div>
//       <h1>Weather in {city}:</h1>
//       {weather !== null && <p> Temperature : {weather.main.temp} °C </p>}
//       {weather !== null && <p> Conditions : {weather.weather[0].description}  </p>}
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={getWeather} >Get Weather</button>
//     </div>
//   )






















