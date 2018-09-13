import React, { Component } from "react";

class QuizList extends Component {
  constructor() {
    super();
    this.state = {
      quiz_list: [
        { quizName: "HTML", tests: 3 },
        { quizName: "CSS", tests: 2 },
        { quizName: "JAVASCRIPT", tests: 3 }
      ],
      quiz_info: [
        {
          quizName: "HTML",
          tests: [
            {
              name: "Test 1",
              questions: 5,
              time: 60,
              quiz_questions: [
                {
                  quiz: "What is abbreviation of HTML?",
                  option1: "Hyper Type Multi Language",
                  option2: "Higher Text Multiple Language",
                  option3: "Hyper Text Markup Language",
                  option4: "Hollow Type Markup Language ",
                  answer: "3"
                },
                {
                  quiz: "How many types of markup in HTML?",
                  option1: "Both",
                  option2: "1 - opening and closing markup only",
                  option3: "None of above",
                  option4: "1 - self closing markups only",
                  answer: "1"
                },
                {
                  quiz: "<iframe> is HTML5 markup",
                  option1: "False",
                  option2: "True",
                  option3: "Neither true nor false",
                  option4: "Not Sure",
                  answer: "2"
                },
                {
                  quiz: "<div> and <span> are inline elements?",
                  option1: "True",
                  option2: "False",
                  option3: "Neither True nor false",
                  option4: "None of above",
                  answer: "3"
                },
                {
                  quiz: "HTML must need body markup. Why? Because:",
                  option1: "It did'nt needs to show the markups inside it.",
                  option2: "It needs to show the markups inside it.",
                  option3: "It needs <head> element",
                  option4: "None of above",
                  answer: "2"
                }
              ]
            },
            { name: "Test 2", questions: 10, time: 120 }
          ]
        },
        {
          quizName: "CSS",
          tests: [{ name: "Test 1", questions: 5, time: 60 }]
        },
        {
          quizName: "JAVASCRIPT",
          tests: [
            { name: "Test 1", questions: 5, time: 60 },
            { name: "Test 2", questions: 6, time: 70 },
            { name: "Test 3", questions: 10, time: 120 }
          ]
        }
      ],
      saveSelectedQuizObj: null,
      renderSelectedQuizObj: false
    };
    this.back = this.back.bind(this);
  }

  updateQuizInfoState(index) {
    const { quiz_info } = this.state;
    this.setState({
      saveSelectedQuizObj: quiz_info[index],
      renderSelectedQuizObj: true
    });
  }

  back() {
    this.setState({ renderSelectedQuizObj: false });
  }

  /* Body Functions */

  renderQuizInfo() {
    const { saveSelectedQuizObj } = this.state;
    return (
      <div>
        <h2>{saveSelectedQuizObj.quizName} Quiz</h2>
        <ol>
          {saveSelectedQuizObj.tests.map((test, i) => {
            return (
              <li key={`${saveSelectedQuizObj.quizName}_${test.name}`}>
                <h4>{test.name}</h4>
                <p>Total Questions: {test.questions}</p>
                <p>Total Time: {test.time} Seconds</p>
                <button
                  onClick={() => {
                    // send a object to a function that will genrate questions
                  }}
                >
                  Start Quiz {i + 1}
                </button>
              </li>
            );
          })}
        </ol>
        <button onClick={this.back}>Back</button>
      </div>
    );
  }

  renderQuizList() {
    const { quiz_list } = this.state;
    return (
      <div>
        <h2>Dashboard</h2>
        <ul>
          {quiz_list.map((qList, index) => {
            return (
              <li style={{ margin: "15px" }} key={`${qList}_${index}`}>
                {qList.quizName} QUIZ | There are {qList.tests} tests
                <button
                  style={{ marginLeft: "15px" }}
                  onClick={this.updateQuizInfoState.bind(this, index)}
                >
                  Next
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    const { renderSelectedQuizObj } = this.state;
    return (
      <div>
        {renderSelectedQuizObj ? this.renderQuizInfo() : this.renderQuizList()}
      </div>
    );
  }
}

export default QuizList;
