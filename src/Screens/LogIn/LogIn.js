import React, { Component } from "react";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.logInNow = this.logInNow.bind(this);
  }

  logInNow() {
    const { email, password } = this.state;
    // console.log(email, password);
    
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(userInfo);

    if (email === userInfo.email && password === userInfo.password) {
      console.log("user logged in ****");
    } else {
      console.log("enter correct details");
    }
  }

  render() {
    return (
      <div>
        <input
          type="email"
          onChange={e => this.setState({ email: e.target.value })}
        />
        <input
          type="password"
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button
          onClick={this.logInNow}
        >
          LogIn
        </button>
      </div>
    );
  }
}

export default LogIn;
