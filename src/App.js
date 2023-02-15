// import Home from "./component/Home";
// import About from "./component/About";
// import Contact from "./component/Contact";
// import Error from "./component/Error";
// import Insta from "./component/Insta";
// import Mail from "./component/Mail";
// import UserDetails from "./component/UserDetails";
// import { Login } from "@mui/icons-material";
// const [data] = useFetch('https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001') ;
// import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
// import CompA from "./component/CompA";

import CompI from "./component/CompI";
import React, { useReducer, useEffect, useState, useMemo, useCallback, Component } from "react";
import './App.css';
import Header from "./component/Header";
import axios from "axios";
import useFetch from "./component/useFetch";
import Todos from "./component/Todos";
import { TailSpin, MagnifyingGlass } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { Inc, Dec } from "./states/reducers";
import Login from './component/Login';
import Nav from './component/Nav';
import Head from "./Header/Head";
{/* <Head /> */ }


export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLogIn : false 
    }
  }

  changeStatus = () => {
    this.setState({
      isLogIn : !this.state.isLogIn
    })
  }

  render() {
    return (
      <>
        {
          this.state.isLogIn === false ? <Login status={this.changeStatus} /> : <Head  status={this.changeStatus}  />
        }
      </>
    )
  }

}


// Initialization is done by constructer
// constructor(props) {
//   super(props)

//   this.state = {
//     show: false
//   }
//   console.log("inside constructor");
// }

// when all the things have been painted on the page 
// componentDidMount() {
//   console.log("componentDidMount");
// }

// handleToggle = () => {
//   this.setState({
//     show : !this.state.show
//   })
// }

// componentDidMount() {
//   console.log("componentDidMount");
// }
// console.log("Render");


// constructor(props) {
//   super(props)

//   this.state = {
//     count: 0
//   }
// }

// componentDidUpdate(pP, pS, sS) {
// console.log("method called", pP , this.props.data );
// if(pS.count == this.state.count ) {
//   console.log("Match") ;
// }
// if (pS.count < 3) {
//   this.setState({ count: this.state.count + 1 })
// }
// console.log(pP) ;
// }

// render() {
//   return (
//     <div>
//       <h1>Component Did Update Lifecycle Method</h1>
//       <Child data={this.state.count} />
//       <button
//         onClick={
//           () => {
//             this.setState({ count: this.state.count + 1 })
//           }}
//       >
//         Update counter : {this.state.count}
//       </button>
//     </div>
//   )
// }
// export default class App extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       data: 0 ,
//       number : 100
//     }
//   }

//   forceUpdateStateHandler = () => {
//     console.log("Function callinf forced update method")
//     this.forceUpdate( () => {
//       console.log("Inside the force Update method") ;
//     } )
//   }

//   render() {
//     return (
//       <div>

//         <h1> ForceUpdate </h1>

//         <h2>
//             Generate Random Number
//         </h2>

//         <h4>
//           Random Numbers: { Math.random()}
//         </h4>

//         <h3>Number :- { Math.random() * this.state.number }</h3>

//         <button onClick={this.forceUpdateStateHandler} > ForceUpdate </button>

//       </div>
//     )
//   }

// }


// class Child extends Component {

//   constructor(props) {
{/* <Child /> */ }
//     super(props)

//     this.state = {
//       data: 1
//     }
//   }

// componentDidUpdate(props, state , snapshot) {
//   console.log( "componentDidUpdate" , props , state , snapshot ) ;

// }

// getSnapshotBeforeUpdate(pP , pS) {
//   return pS.currentVal * 10 ;
// }

// static getDerivedStateFromProps(props , state) {
//     console.log(props, state) ;
//     return {
//       currentVal : props.data * 10
//     };
// }

// shouldComponentUpdate(pP, pS) {
//     // console.log(pS) ;
//     if(pS.data !== this.state.data) {
//       return true ;
//     } else {
//       return false ;
//     }
// }

// render() {
//   console.log("Inside render")
//   return (
//     <div>
{/* //   <h1>
      //     {this.state.currentVal}
      //   </h1>
      //   <button onClick={() => this.setState({ currentVal : this.state.currentVal + 1 }) } >Update State</button> */}
//         <h1>Child Component {this.state.data} </h1>
//         <button
//           onClick={() => this.setState({
//             data: this.state.data + 1
//           })}
//         > Update State </button>
//       </div>
//     )
//   }

// }

{/* <h1>
          Life Cycle Method
        </h1>
        {
          this.state.show ? <Nav /> : ""
        }
        <button onClick={this.handleToggle} >Toggle NavBar</button> */}
{/* <h1>
          Component Will Unmount Lifecycle method
        </h1>
        {
          this.state.show ? <Child /> : ""
        }
        <button onClick={this.handleToggle} >Toggle Child</button> */}
// class Child extends Component {

//   componentWillUnmount() {
//     console.log("Child componentWillUnmount") ;
//   }

//   render() {
//     return (
//       <div>
//         <h3>Child Component</h3>
//       </div>
//     )
//   }

// }






// export default function App() {


//   return (
//     <>
//       Hello world!
//     </>
//   ) ;

// } ;














{/* <h1>Hello world!!</h1>
<div
style={{
          // const curState = useSelector((state) => state.number);
          // const dispatch = useDispatch();
          width: "100%", display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <h1> {curState} </h1>
        <button onClick={() => dispatch(Inc(10)) } >INC</button>
        <button onClick={() => dispatch(Dec(5)) } >DEC</button>
      </div> */}

// const [loading, setLoading] = useState(false);
//   const [data , setData] = useState([]);

//   useEffect(() => {
//     setLoading(true) ;
//     axios.get('https://dummyjson.com/products')
//       .then((res) => {
//         setData(res.data.products) ;
//         setLoading(false) ;
//         console.log(res.data.products) ;
//       })
//       .catch((err) => {
//         console.log(err) ;
//       }) ;
//   } , [] ) ;

//   return (
//     <>
//       <Header />
//       <div className="main">
//         {/* <TailSpin /> */}
//         {
//           loading 
//           ?
//           <TailSpin className="tail" />
//           :
//           data.map((ele) => {
//             return (
//               <div key={ele.id}>
//                 <img src={`${ele.thumbnail}`} alt="" />
//                 <p>{ele.brand}</p>
//                 <p>{ele.category}</p>
//                 <p>{ele.price}</p>
//                 <p>{ele.stock}</p>
//               </div>
//             )
//           })
//         }
//       </div>
//     </>
//   )

{/* Here , we are basically passing the function and at the same time we are also passing the function to add the todo */ }




// const [count, setCount] = useState(0);
// const [todos, setTodos] = useState([]);

// const increment = () => {
//   setCount((c) => c + 1);
// }

// const addTodo = useCallback((num) => {
//   setTodos( (t) => [...t, `New Todo ${num}`] );
// }, [todos]);

// return (

//   <>

//     <Header />

//     <div>
//       <button onClick={increment} >+</button> <br />
//       Count : {count}
//     </div>

//     <hr />

//     <Todos todos={todos} addTodo={addTodo} />


//   </>

// )


















// const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   const expensiveCalculation = (num) => {
//     for (let i = 0; i < 10000000000000; i++) {
//       return num;
//     }
//   }

//   const calculation = useMemo(() => {
//     expensiveCalculation(count);
//   }, [count]);

//   return (

//     <>

//       <Header />

//       <button onClick={() => setCount(count + 1)} >Increment</button>
//       <h1>Count : {count}</h1>

//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <h1>Name : {name} </h1>

//     </>

//   );


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



















