import React, { Component } from "react";
import Video from "./Video";
import { Consumer } from "../context";

class Videos extends Component {
  deleteClickHandler = id => {
    console.log(`Videos - delete click handler ${id}`);
    const { videos } = this.state;

    const newVideos = videos.filter(video => video.id !== id);

    this.setState({
      videos: newVideos
    });
  };
  render() {
    return (
      <Consumer>
        {value => {
          // Access to whatever the provider gives us, in this case, the whole state
          const { videos } = value;
          return (
            <div>
              {videos.map(video => (
                <Video
                  key={video.id}
                  video={video}
                  deleteClickHandler={this.deleteClickHandler.bind(
                    this,
                    video.id
                  )}
                />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Videos;
