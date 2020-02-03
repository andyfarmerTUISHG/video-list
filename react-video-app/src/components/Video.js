import React, { Component } from "react";
import PropTypes from "prop-types";

class Video extends Component {
  state = {
    showMediaDetails: false
  };
  onShowClick = (id, name, e) => {
    console.log(`in on show clicks ${id} - ${name}`);
    this.setState({ showMediaDetails: !this.state.showMediaDetails });
    //update state
  };
  onDeleteClick = (id, e) => {
    console.log(`delete click - ${id}`);
    this.props.deleteClickHandler();
  };
  render() {
    const { id, name, mediaType, genre } = this.props.video;
    const { showMediaDetails } = this.state;

    return (
      <div className="card card-body mb-3">
        <h2>
          Name: {name}
          <i
            onClick={this.onShowClick.bind(this, id, name)}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ color: "red", float: "right", cursor: "pointer" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
        </h2>
        {showMediaDetails ? (
          <ul className="list-group">
            <li className="list-group-item">Media: {mediaType}</li>
            <li className="list-group-item">Style: {genre}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Video.propTypes = {
  video: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};
export default Video;
