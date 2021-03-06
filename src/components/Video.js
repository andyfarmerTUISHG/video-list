import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { Link } from "react-router-dom";
import { deleteVideo } from "../actions/videosActions";
import { connect } from "react-redux";
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
    // try {
    //   Axios.delete(
    //     `https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos/${id}`
    //   );
    // } catch (error) {}

    this.props.deleteVideo(id);
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
          <Link
            to={`/video/edit/${id}`}
            className="nav-link"
            style={{
              color: "black",
              float: "right",
              cursor: "pointer",
              marginRight: "1rem"
            }}
          >
            <i className="fas fa-pencil-alt" />
          </Link>
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
  deleteVideo: PropTypes.func.isRequired
};
export default connect(null, { deleteVideo })(Video);
