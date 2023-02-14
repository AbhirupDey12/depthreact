// import Home from "./component/Home";
// import About from "./component/About";
// import Contact from "./component/Contact";
// import Error from "./component/Error";
// import Insta from "./component/Insta";
// import Mail from "./component/Mail";
// import UserDetails from "./component/UserDetails";
// import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
// import CompA from "./component/CompA";

import React, { useReducer, useEffect, useState } from "react";
import './App.css';
import Login from './component/Login' ;
import Header from "./component/Header";
import axios from "axios";
import useFetch from "./component/useFetch";
// import { Login } from "@mui/icons-material";
// const [data] = useFetch('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001') ;
{/* <Login /> */}

export default function App() {
  
  const [count, setCount] = useState(0) ;
  const [name , setName] = useState("") ;

  const expensiveCalculation = (num) => {
    for(let i = 0 ; i < 10000000000000; i++) {
      return num ;
    }
  }

  const calculation = expensiveCalculation(count) ;
  
  return (

    <>

      <Header />

      <button onClick={() => setCount(count + 1)} >Increment</button>
      <h1>Count : {count}</h1>

      <input type="text" onChange={(e) => setName(e.target.value)}  />
      <h1>Name : {name} </h1>

    </>

  );

} ;





























{/* <Header />
      {
        data.map((ele) => {
          return (
            <div key={ele.id} style={{border : "1px solid black"}} >
              <p>{ele.id}</p>
              <p>{ele.firstName}</p>
              <p>{ele.address}</p>
            </div>
          );
        })
      } */}



// const reducer = ( state , action ) => {
// if(action.type === "INC") {
//   return state + 1 ;
// }
// else if(action.type === "DEC") {
//   return state - 1 ;
// }
// else if(action.type === "MUL") {
//   return state * 2 ;
// }
// else {
//   return state ;
// }
// };

// } ;

// export default function App() {

// const [ state , dispatch ] = useReducer(reducer , 0 ) ;

// return (
//   <>
//       <Header />
//       <h1>{state}</h1>
//       <button onClick={ () => dispatch( { type : "INC" } ) } > Increment </button>
//       <button onClick={ () => dispatch( { type : "DEC" } ) } > Decrement </button>
//       <button  onClick={ () => dispatch( { type : "MUL" } ) }  > Multiplication </button>
//   </>
// )

// const [input, setInput] = useState("") ;
//   const [count, setCount] = useState(0) ;

//   const inputField = useRef() ;

//   const formHandler = (e) => {
//     setInput(e.target.value) ;
//   }

//   const clickHandler = () => {
//     inputField.current.value = 'Hello world!' ;
//     inputField.current.style.border = "2px solid gray" ;
//     console.log(inputField.current) ;
//   }

//   return (
//     <>

//         <Header />

//         <input ref={inputField} type="text" onChange={formHandler} value={input} />

//         <br />

//         <button onClick={clickHandler} > Clickk Here </button>

//     </>
//   )


// export { AppState, NameContext };
// const AppState = createContext();
// const NameContext = createContext();

// const [data, setdata] = useState('web3Mantra');
// const [name, setName] = useState({ name: "Shubham", age: 20 });
// const [temp, settemp] = useState(0) ;

// const sayHello = () => {
//   alert("Hello User!");
// }

// return (
//   <>
//     <AppState.Provider value={{ name, data, sayHello }}>
//       <NameContext.Provider value={temp}>
//         <Header />
//         <CompA />
//       </NameContext.Provider>
//     </AppState.Provider>
//   </>
// )

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



















