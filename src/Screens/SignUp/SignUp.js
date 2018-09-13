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
        <input
          type="text"
          onChange={e => {
            this.setState({ username: e.target.value });
          }}
          autoFocus={true}
          placeholder="name"
        />
        <input
          type="email"
          onChange={e => {
            this.setState({ email: e.target.value });
          }}
          placeholder="email"
        />
        <input
          type="password"
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
          maxLength="8"
          placeholder="password"
        />
        <button onClick={this.signUpNow}>Submit</button>
      </div>
    );
  }
}

export default SignUp;
