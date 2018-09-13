import React, { Component } from "react";
import "./App.css";
import SignUp from "./Screens/SignUp/SignUp";
import LogIn from "./Screens/LogIn/LogIn";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isUser: false,
      authForms: true
    };
    this.checkUser = this.checkUser.bind(this);
    this.toggleAuthForms = this.toggleAuthForms.bind(this);
    this.changeUserState = this.changeUserState.bind(this);
    this.logout = this.logout.bind(this);
  }

  checkUser() {
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (!userInfo) {
      console.log("user is NOT logged in");
      this.setState({ isUser: false });
    } else {
      this.setState({ isUser: true });
      console.log(`${userInfo.username} is logged IN`);
    }
  }

  changeUserState() {
    this.setState({ isUser: true });
  }

  toggleAuthForms(Show_Hide) {
    this.setState({ authForms: Show_Hide });
  }

  logout() {
    this.setState({ isUser: false });
    sessionStorage.removeItem("userInfo");
  }

  componentWillMount() {
    this.checkUser();
  }

  render() {
    const { isUser, authForms } = this.state;
    return (
      <div>
        {!isUser ? (
          authForms ? (
            <div>
              <SignUp toggleToSignIn={this.toggleAuthForms} />
              <button onClick={this.toggleAuthForms.bind(this, false)}>
                LogIn
              </button>
            </div>
          ) : (
            <div>
              <LogIn changeUserState={this.changeUserState} />
              <button onClick={this.toggleAuthForms.bind(this, true)}>
                SignUp
              </button>
            </div>
          )
        ) : (
          <div>
            Body
            <button onClick={this.logout}>Logout</button>
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <ul>
              <li>quiz list</li>
              <li>number of quizzes in the selected quiz</li>
              <li>start quiz button on each quiz </li>
            </ul>
            <p>example</p>
            <ol>
              <li>
                <button>HTML</button>
                <button>CSS</button>
                <button>JS</button>
              </li>
              <li>
                <p>Info of (selected quiz) HTML</p>
                <p>
                  quiz 1 <button>start quiz 1</button>
                </p>
                <p>
                  quiz 2 <button>start quiz 2</button>
                </p>
              </li>
              <li>all questions one by one</li>
            </ol>
            {console.log(isUser)}
          </div>
        )}
      </div>
    );
  }
}

export default App;
