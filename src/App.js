import React from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text: "",
    reverse: "",
    result: "",
  };

  textHandler = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value,
    });
  };

  pallCheckHandler = (e) => {
    e.preventDefault();

    let re = /[^\w|_]/g;
    let inputText = this.state.text.split("");
    let revText = inputText
      .reverse(inputText)
      .join("")
      .replace(re, "")
      .toLowerCase();

    let result = this.state.text.replace(re, "").toLowerCase() === revText;

    if (result) {
      this.setState({
        result: "The text is a Palindrome.",
        reverse: revText,
      });
    } else {
      this.setState({
        result: "The text is NOT a Palindrome.",
        reverse: revText,
      });
    }
  };

  reloadWindow = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className="container">
        <header>
          <h1>Palindrome Checkers</h1>
        </header>
        <div className="app">
          <div className="inputs">
            <form onSubmit={this.pallCheckHandler}>
              <div>
                <input
                  type="text"
                  id="input_text"
                  onChange={this.textHandler}
                  placeholder="Input your text..."
                />
              </div>
              <button
                type="submit"
                id="submit_check"
                onClick={this.pallCheckHandler}
              >
                Check
              </button>

              <button onClick={this.reloadWindow}>Refresh</button>
            </form>
            <div className="result_area">
              <h3>
                Your Text: <span>{this.state.text}</span>{" "}
              </h3>
              <h3>
                Reversed Text: <span>{this.state.reverse} </span>
              </h3>

              <p className="result_text">{this.state.result}</p>
            </div>
          </div>
          <div className="footer">
            <p>
              Made by Dibya Dahal @ Business College{" "}
              <a href="https://github.com/Killerbee7/Palindrome_checker-react">
                GitHub Link
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
