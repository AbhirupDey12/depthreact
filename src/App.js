import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Insta from "./component/Insta";
import Mail from "./component/Mail";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

export default function App() {

  return (

    <Router>

      <div className="App">

        <Header />

        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} >
            <Route index element={<Insta />} />
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
          </Route>

          {/* Error Handling */}
          <Route path="*" element={<Error />} />

        </Routes>

      </div>

    </Router >

  )

};




























