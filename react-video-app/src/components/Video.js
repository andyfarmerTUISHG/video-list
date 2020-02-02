import React, { Component } from "react";
import PropTypes from "prop-types";

class Video extends Component {
  state = {};
  onShowClick = () => {
    console.log(`in on show clicks ${this.state}`);
  };

  render() {
    const { name, mediaType, genre } = this.props.video;
    return (
      <div className="card card-body mb-3">
        <h2>
          Name: {name}
          <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h2>
        <ul className="list-group">
          <li className="list-group-item">Media: {mediaType}</li>
          <li className="list-group-item">Style: {genre}</li>
        </ul>
      </div>
    );
  }
}

Video.propTypes = {
  video: PropTypes.object.isRequired
};
export default Video;
