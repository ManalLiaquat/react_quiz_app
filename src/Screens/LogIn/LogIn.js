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
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (email === userInfo.email && password === userInfo.password) {
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      this.props.changeUserState();
    } else {
      console.log("enter correct details");
    }
    // console.log(JSON.parse(sessionStorage.getItem("userInfo")));
  }
  render() {
    return (
      <div>
        <input
          type="email"
          onChange={e =>
            this.setState({
              email: e.target.value
            })
          }
          autoComplete="true"
          autoFocus="true"
          placeholder="email"
        />
        <input
          type="password"
          onChange={e =>
            this.setState({
              password: e.target.value
            })
          }
          placeholder="password"
        />
        <button onClick={this.logInNow}>LogIn</button>
      </div>
    );
  }
}

export default LogIn;
