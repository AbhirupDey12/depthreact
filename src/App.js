import React, { useState, useEffect, useMemo } from "react";
import Header from "./component/Header";
import './App.css';
import Movie from "./component/Movie";
import MovieData from './component/movie.json'

export default function App() {

  return (

    <div className="App">
      <Header />
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
      </div>
    </div>

  );

};































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






















