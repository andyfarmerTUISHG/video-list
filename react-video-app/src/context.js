import React, { Component } from "react";
import axios from "axios";
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
    videos: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos"
      )
      .then(res =>
        this.setState({
          videos: res.data
        })
      );
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
