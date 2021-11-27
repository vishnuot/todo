import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  render() {
    return (
      <div className="todo-body">
        <div className="todo-container">
          <h2>TODO APP</h2>
          <div className="input-section">
            <form action="">
              <input type="text" />
            </form>
          </div>
          <ul>
            <li>List 1<i class="fas fa-trash"></i></li>
            <li>List 1<i class="fas fa-trash"></i></li>
            <li>List 1<i class="fas fa-trash"></i></li>
            <li>List 1<i class="fas fa-trash"></i></li>
           
          </ul>
        </div>
      </div>
    );
  }
}
