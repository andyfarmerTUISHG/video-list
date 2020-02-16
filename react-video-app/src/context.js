import React, { Component } from "react";

const Context = React.createContext();

// Reducer will take state and an action object.  action object will have a type which will
// invoke something
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_VIDEO":
      return {
        ...state,
        videos: state.videos.filter(video => video.id !== action.payload)
      };
    case "ADD_VIDEO":
      return {
        ...state,
        videos: [action.payload, ...state.videos]
      };
    default:
      return state;
  }
};

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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
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
