import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      values: [],
    };
  }
  inputHandleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  // Submit action old method ***start***
  submitAction = (event) => {
    event.preventDefault();
    if (this.state.input === "") {
      alert("Please enter data");
    } else {
      let tempArr = this.state.values;
      tempArr.push(this.state.input);
      this.setState({ values: tempArr });
      this.state.input = "";
    }
  };
  // Submit action old method ***end***

  //Submit action new  method ***start***

  submitActionNew = (event) => {
    let { input, values } = this.state;
    if (input === "") {
      alert("Please enter a value");
    } else {
      event.preventDefault();
      this.setState({ values: [...values, input], input: "" });
    }
  };

  // Submit action new method ***end***
  render() {
    let { input, values } = this.state; // destructuring

    return (
      <div className="todo-body">
        <div className="todo-container">
          <h2>TODO APP</h2>
          <div className="input-section">
            <form>
              <input
                type="text"
                onChange={this.inputHandleChange}
                value={input}
              />
              <button onClick={this.submitActionNew}>add data</button>
            </form>
          </div>
          <ul>
            {values.map((itm, index) => {
              return (
                <li key="index">
                  {itm}
                  <i className="fas fa-trash"></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
