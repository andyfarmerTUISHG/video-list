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
            <div>
              {videos.map(video => (
                <Video key={video.id} video={video} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Videos;
