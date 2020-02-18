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
    case "EDIT_VIDEO":
      console.log(`EDIT Video Dispatch`);

      return {
        ...state,
        videos: state.videos.map(video =>
          video.id === action.payload.id ? (video = action.payload) : video
        )
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

  async componentDidMount() {
    const res = await axios.get(
      "https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos"
    );
    this.setState({
      videos: res.data
    });
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
