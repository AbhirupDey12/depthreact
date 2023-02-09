import React, { useState, useEffect } from "react";

export default function App() {

  return (
    
    <h1>
      Hello world
    </h1>

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






















