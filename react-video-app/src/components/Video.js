import React from "react";
import PropTypes from "prop-types";

function Video(props) {
  const { name, mediaType, genre } = props.video;
  return (
    <div className="card card-body mb-3">
      <h2>Name: {name}</h2>
      <ul className="list-group">
        <li className="list-group-item">Media: {mediaType}</li>
        <li className="list-group-item">Style: {genre}</li>
      </ul>
    </div>
  );
}

Video.prototype = {
  name: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired
};
export default Video;
