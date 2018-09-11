import React, { Component } from "react";
import "./App.css";
import SignUp from "./Screens/SignUp/SignUp";
import LogIn from "./Screens/LogIn/LogIn";

class App extends Component {
  constructor(){
    super()
    this.state = {
      // isUser: false
    }
  }
  render() {
    return <div>
        <SignUp />
        <LogIn /> {/*pass a function to get user is login or not by using prop*/}
      </div>;
  }
}

export default App;
