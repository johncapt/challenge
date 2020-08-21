import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      inputSubText: "",
      displayMatches: false,
    };
  }

  onButtonClick = (event) => {
    this.setState({ displayMatches: true });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { inputText, inputSubText, displayMatches } = this.state;
    const indexes = [...inputText.matchAll(new RegExp(inputSubText, "gi"))].map(
      (a) => a.index
    );

    return (
      <div>
        <h1>Find matches of subtext within text</h1>
        <div className="App">
          <div>
            <label htmlFor="inputText">Text</label>
            <input
              name="inputText"
              value={inputText}
              onChange={this.onChange}
              type="text"
              placeholder="Enter text"
              required
            />
          </div>
          <div>
            <label htmlFor="inputSubText">Sub Text</label>
            <input
              name="inputSubText"
              value={inputSubText}
              onChange={this.onChange}
              type="text"
              placeholder="Enter subtext"
              required
            />
          </div>
          <button onClick={this.onButtonClick}>
            Find matches of subtext within text
          </button>

          <p className="results">
            {displayMatches && inputSubText !== ""
              ? `${
                  indexes.length
                } match(es) found at position(s):${indexes.join(", ")}`
              : ""}{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
