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
  deleteClickHandler = id => {
    console.log(`Videos - delete click handler ${id}`);
    const { videos } = this.state;

    const newVideos = videos.filter(video => video.id !== id);

    this.setState({
      videos: newVideos
    });
  };
  render() {
    const { videos } = this.state;
    return (
      <div>
        {videos.map(video => (
          <Video
            key={video.id}
            video={video}
            deleteClickHandler={this.deleteClickHandler.bind(this, video.id)}
          />
        ))}
      </div>
    );
  }
}

export default Videos;
