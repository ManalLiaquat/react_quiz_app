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
        <h1 className="text-center">LOG IN</h1>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="email" className="">
              Email:
            </label>
            <input
              type="email"
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
              className="form-control"
              autoComplete="true"
              autoFocus={true}
              placeholder="email"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="">
              Password:
            </label>
            <input
              type="password"
              onChange={e =>
                this.setState({
                  password: e.target.value
                })
              }
              className="form-control"
              placeholder="password"
            />
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-success" onClick={this.logInNow}>
                LogIn <i className="fa fa-sign-in" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
