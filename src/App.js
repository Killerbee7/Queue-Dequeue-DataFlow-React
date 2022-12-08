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
    let revText = (inputText.reverse(inputText).join("")).replace(re,'')

    let result = this.state.text.replace(re ,'') === revText;
    console.log(inputText);
    console.log(result);
  

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
      <div className="app">
        <h2>Palindrome Checker</h2>
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

            <button id="refresh" onClick={this.reloadWindow}>
              Refresh
            </button>
          </form>
          <div className="result_area">
            <h3>Your Text: {this.state.text} </h3>
            <h3>Reversed Text: {this.state.reverse}</h3> 
            
            <p className="result-txt">{this.state.result}</p>
          </div>
        </div>
        <div class="footer">
         <p>Made by Dibya Dahal @ Business School <a href="https://github.com/Jessemwangi/palindromecheker/blob/master/src/Main.jsx">GitHub Link</a></p>
         
        </div>
      </div>

   
    );
  }
}

export default App;