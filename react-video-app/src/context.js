import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    videos: [
      {
        id: 1,
        name: "Aliens",
        genre: "SCI-FI",
        mediaType: "DVD"
      },
      {
        id: 2,
        name: "Alien",
        genre: "SCI-FI",
        mediaType: "DVD"
      },
      {
        id: 3,
        name: "Deadpool",
        genre: "ACTION",
        mediaType: "Blu-Ray"
      },
      {
        id: 4,
        name: "Deadpool 2",
        genre: "ACTION",
        mediaType: "Blu-Ray"
      }
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
