import React from "react";
import PropTypes from "prop-types";

function Video(props) {
  const { name, mediaType, genre } = props;
  return (
    <div>
      <h2>Name: {name}</h2>
      <ul>
        <li>Media: {mediaType}</li>
        <li>Style: {genre}</li>
      </ul>
    </div>
  );
}

Video.prototype = {
  name: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired
};
export default Video;
