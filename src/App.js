import React, { useState, useEffect, createContext } from "react";
import './App.css';
import Header from "./component/Header";
// import Home from "./component/Home";
// import About from "./component/About";
// import Contact from "./component/Contact";
// import Error from "./component/Error";
// import Insta from "./component/Insta";
// import Mail from "./component/Mail";
// import UserDetails from "./component/UserDetails";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import CompA from "./component/CompA";

const AppState = createContext();
const NameContext = createContext();

export default function App() {

  const [data, setdata] = useState('web3Mantra');
  const [name, setName] = useState({ name: "Shubham", age: 20 });
  const [temp, settemp] = useState(0) ;

  const sayHello = () => {
    alert("Hello User!");
  }

  return (
    <>
      <AppState.Provider value={{ name, data, sayHello }}>
        <NameContext.Provider value={temp}>
          <Header />
          <CompA />
        </NameContext.Provider>
      </AppState.Provider>
    </>
  )

};

export { AppState , NameContext };














{/* <Router>

<div className="App">

  <Header />

  <Routes>

    {/* Home */}
//     <Route path="/" element={<Home />} />

//     <Route path="/:userId" element={<UserDetails />} />

//     {/* About */}
//     <Route path="/about" element={<About />} />

//     {/* Contact */}
//     <Route path="/contact" element={<Contact />} >
//       <Route index element={<Insta />} />
//       <Route path="insta" element={<Insta />} />
//       <Route path="mail" element={<Mail />} />
//     </Route>

//     {/* Error Handling */}
//     <Route path="*" element={<Error />} />

//   </Routes>

// </div>

// </Router > 



















