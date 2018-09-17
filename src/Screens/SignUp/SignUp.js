import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.signUpNow = this.signUpNow.bind(this);
  }

  signUpNow() {
    let { toggleToSignIn } = this.props;
    const { username, email, password } = this.state;
    if (!email.match(/\S+@\S+\.\S+/)) {
      alert("please enter correct email");
    } else if (!password.match(/(?=.*\d)(?=.*[a-z]).{8,}/)) {
      alert(
        "Please enter atleast 8 characters and contain atleast one character and one number"
      );
    } else {
      let signUpObj = { username, email, password };
      localStorage.setItem("userInfo", JSON.stringify(signUpObj));
      toggleToSignIn(false);
      console.log(signUpObj, "****");
    }
  }

  render() {
    // const {  } = this.props;
    return (
      <div>
        <h1 className="text-center ">REGISTRATION</h1>
        <br />
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              onChange={e => {
                this.setState({ username: e.target.value });
              }}
              autoFocus={true}
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="number">Email:</label>
            <input
              type="email"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              className="form-control"
              placeholder="email"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="number">password:</label>
            <input
              type="password"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
              maxLength="8"
              className="form-control"
              placeholder="password"
            />
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary" onClick={this.signUpNow}>
                Submit <i className="fa fa-database" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
