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
            { name: "Test 1", questions: 5, time: 60 },
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
              <li key={`${test.name}`}>
                <h4>{test.name}</h4>
                <p>Total Questions: {test.questions}</p>
                <p>Total Time: {test.time} Seconds</p>
                <button
                  onClick={() => {
                    console.log(i); //start quiz banana hai
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
