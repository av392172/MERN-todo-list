import React, { Component } from "react";
import { Consumer } from "../context";
import Todo from "./Todo";

export default class Todos extends Component {
    
  render() {
    return (
      <Consumer>
        {(value) => {
          const { todos } = value;
          return todos.map((t) => <Todo todo={t} key={t.id} />);
        }}
      </Consumer>
    );
  }
}
