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
  submitAction = (event) => {

    event.preventDefault();
    if(this.state.input===""){
        alert("Please enter data")
    }
    else{
    let tempArr = this.state.values;
    tempArr.push(this.state.input);
    this.setState({ values: tempArr });
    this.state.input=""
    }
  };
  render() {
    let { input, values } = this.state;
    console.log("ddd", input);
    console.log("array", values);
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
              <button onClick={this.submitAction}>add data</button>
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
