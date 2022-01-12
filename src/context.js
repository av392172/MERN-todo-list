import React, { Component, createContext } from "react";

const Context = createContext();

export class Provider extends Component {
  state = {
    todos: [
      { id: 1, title: "check emails", complete: false },
      { id: 2, title: "check voicemails", complete: true },
      { id: 3, title: "check report", complete: false },
      { id: 3, title: "wash dishes", complete: true },
      { id: 3, title: "attend the meeting", complete: false },
    ]
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
