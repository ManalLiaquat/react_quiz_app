import React, { Component } from "react";

class MCQs extends Component {
  static defaultProps = {
    currentQuesObj: {},
    currentTestIndex: 0
  };
  constructor(props) {
    super(props);
    const { currentQuesObj, currentTestIndex } = this.props;
    this.state = {
      question: currentQuesObj.tests[currentTestIndex].quiz_questions[0].quiz,
      opt1: currentQuesObj.tests[currentTestIndex].quiz_questions[0].option1,
      opt2: currentQuesObj.tests[currentTestIndex].quiz_questions[0].option2,
      opt3: currentQuesObj.tests[currentTestIndex].quiz_questions[0].option3,
      opt4: currentQuesObj.tests[currentTestIndex].quiz_questions[0].option4,
      i: 0,
      correct: 0,
      score: 0,
      min: null,
      sec: null
    };
    this.minute = Math.ceil(currentQuesObj.tests[currentTestIndex].time / 60);
    this.second = 1;
    this.timeStart = null;
    this.next = this.next.bind(this);
    this.timer = this.timer.bind(this);
  }

  next() {
    const { currentQuesObj, currentTestIndex } = this.props;
    var { i, correct, score } = this.state;

    var quiz_questions = currentQuesObj.tests[currentTestIndex].quiz_questions;

    var radioBtn = document.querySelector("input[name='option']:checked");
    if (radioBtn == null) {
      alert("select value");
    } else {
      if (quiz_questions[i].answer.match(radioBtn.value)) {
        console.log("quiz_questions[i].answer**", quiz_questions[i].answer);
        // console.log(
        //   "answer**",
        //   quiz_questions[i].answer
        // );
        this.setState({ correct: ++correct });
      }

      if (quiz_questions.length - 1 === i) {
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";
        // console.log("value equal");
        // console.log(this.state.correct);
        score = correct * (100 / quiz_questions.length).toFixed(2);
        console.log(quiz_questions.length);
        this.setState({ score });
      } else {
        document.querySelector("input[name='option']:checked").checked = false;
        i++;
        const question = quiz_questions[i].quiz;
        const option1 = quiz_questions[i].option1;
        const option2 = quiz_questions[i].option2;
        const option3 = quiz_questions[i].option3;
        const option4 = quiz_questions[i].option4;
        const answer = quiz_questions[i].answer;
        this.setState({
          question,
          opt1: option1,
          opt2: option2,
          opt3: option3,
          opt4: option4,
          i: i
        });
      }
    }
  }

  componentDidMount() {
    this.timer();
  }

  timer() {
    this.timeStart = setInterval(() => {
      this.setState({
        min: this.minute,
        sec: this.second
      });
      this.second--;
      if (this.second == 0) {
        this.second = 60;
        this.minute--;
        this.setState({
          sec: this.second,
          min: this.minute
        });
        if (this.minute < 0) {
          clearInterval(this.timeStart);
          const { currentQuesObj, currentTestIndex } = this.props;
          var quiz_questions =
            currentQuesObj.tests[currentTestIndex].quiz_questions;
          var { score, correct } = this.state;
          this.setState({
            min: 0,
            sec: 0
          });
          score = correct * (100 / quiz_questions.length).toFixed(2);
          this.setState({
            score
          });

          document.getElementById("quizContainer").style.display = "none";
          document.getElementById("resultContainer").style.display = "block";
        }
      }
    }, 10);
  }

  render() {
    const { question, opt1, opt2, opt3, opt4, score, min, sec } = this.state;
    const { currentQuesObj, currentTestIndex } = this.props;
    return (
      <div>
        <div id="quizContainer">
          <p>
            {min} : {sec}
          </p>
          <h3>{question}</h3>
          <input type="radio" value="1" name="option" />
          {opt1}
          <br />
          <input type="radio" value="2" name="option" />
          {opt2} <br />
          <input type="radio" value="3" name="option" />
          {opt3} <br />
          <input type="radio" value="4" name="option" />
          {opt4} <br />
          <button onClick={this.next.bind(this)}>click</button>
        </div>

        <div id="resultContainer" style={{ display: "none" }}>
          <h2>{currentQuesObj.quizName} Quiz</h2>
          <h3>{currentQuesObj.tests[currentTestIndex].name}</h3>
          <p>
            Time:
            {currentQuesObj.tests[currentTestIndex].time} seconds
          </p>
          {score < 70 ? (
            <p>You are fail with grades {score}%</p>
          ) : (
            <p>You are pass with grades {score}%</p>
          )}

          <button
            onClick={() => {
              this.props.backToDashboard(false);
            }}
          >
            Goto Dashboard
          </button>
        </div>
      </div>
    );
  }
}

export default MCQs;
