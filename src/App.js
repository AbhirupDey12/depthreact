import React, { useState, useEffect, useMemo } from "react";
import './App.css';
import Header from "./component/Header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (

    <div className="App">
      <Header />

      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField id="outlined-basic" label="Name" variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField id="outlined-basic" label="Email" variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button color="success" variant="contained" color="error"
            onClick={addData}
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map( (ele, index) => {
            return (
              <div className="data_val" key={index}>

                <h4> {name} </h4>
                <h4> {email} </h4>
                <Button variant="contained" startIcon={<DeleteIcon />} color='error' onClick={ () => removeItem(index) } >
                  Remove
                </Button>
              </div >
            )
          } )
        }
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






















