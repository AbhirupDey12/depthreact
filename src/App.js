import React from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import './appStyles.css' ;
import styles from './appStyles.module.css' ;

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* <h1 className="error" >Error</h1> */}
        {/* <h1 className= {styles.sucess} > Success </h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary = {true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Greet name="Diana" heroName="Wonderwoman" /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman" >
          <p>This is children props </p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Welcome name="Clark" heroName="Superman" />
      <Welcome  name="Diana" heroName="Wonderwoman"   /> */}
        {/* <Hello /> */}
        {/* <Welcome name="Bruce" heroName="Batman" /> */}
      </div>
    )
  }
}

export default App;

// I love ritik sir and I can go to any level to make him proud of me...































