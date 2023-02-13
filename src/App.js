// import Home from "./component/Home";
// import About from "./component/About";
// import Contact from "./component/Contact";
// import Error from "./component/Error";
// import Insta from "./component/Insta";
// import Mail from "./component/Mail";
// import UserDetails from "./component/UserDetails";
// import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
// import CompA from "./component/CompA";

import React, { useReducer } from "react";
import './App.css';
import Header from "./component/Header";

const reducer = ( state , action ) => {
  
  if(action.type === "INC") {
    return state + 1 ;
  }
  else if(action.type === "DEC") {
    return state - 1 ;
  }
  else if(action.type === "MUL") {
    return state * 2 ;
  }
  else {
    return state ;
  }

} ;

export default function App() {

  const [ state , dispatch ] = useReducer(reducer , 0 ) ;

  return (
    <>
        <Header />
        <h1>{state}</h1>
        <button onClick={ () => dispatch( { type : "INC" } ) } > Increment </button>
        <button onClick={ () => dispatch( { type : "DEC" } ) } > Decrement </button>
        <button  onClick={ () => dispatch( { type : "MUL" } ) }  > Multiplication </button>
    </>
  )
};























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



















