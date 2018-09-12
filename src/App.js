import React, { Component } from "react";
import "./App.css";
import SignUp from "./Screens/SignUp/SignUp";
import LogIn from "./Screens/LogIn/LogIn";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isUser: false
    };
    this.checkUser = this.checkUser.bind(this);
  }

  checkUser() {
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (!userInfo) {
      console.log("user is NOT logged in");
      this.setState({ isUser: false });
    } else {
      console.log(`${userInfo.username} is logged IN`);
      this.setState({ isUser: true });
    }
  }

  render() {
    const { isUser } = this.state;
    return (
      <div>
        {!isUser && <LogIn />}
        {!JSON.parse(localStorage.getItem("userInfo")) ? <SignUp /> : <br />}
      </div>
    );
  }
}

export default App;
