import React, { Component } from "react";
import Video from "./Video";

class Videos extends Component {
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
    // Access to whatever the provider gives us, in this case, the whole state
    const { videos } = this.state;
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
  }
}

export default Videos;
