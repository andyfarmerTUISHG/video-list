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
    const { videos } = this.state;
    return (
      <div>
        {videos.map(video => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    );
  }
}

export default Videos;