import React, { Component } from "react";
import Video from "./Video";
import { Consumer } from "../context";

class Videos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          // Access to whatever the provider gives us, in this case, the whole state
          const { videos } = value;
          return (
            <React.Fragment>
              <h2 className="display-4 mb-2">
                <span className="text-danger">Video</span>List
              </h2>
              {videos.map(video => (
                <Video key={video.id} video={video} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Videos;
