import React, { Component } from "react";
import Video from "./Video";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getVideos } from "../actions/videosActions";

class Videos extends Component {
  componentDidMount() {
    this.props.getVideos();
  }
  render() {
    // Access to whatever the provider gives us, in this case, the whole state
    const { videos } = this.props;
    return (
      <React.Fragment>
        <h2 className="display-4 mb-2">
          <span className="text-danger">Video</span> List
        </h2>
        {videos.map(video => (
          <Video key={video.id} video={video} />
        ))}
      </React.Fragment>
    );
  }
}

Videos.propTypes = {
  videos: PropTypes.array.isRequired,
  getVideos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  videos: state.video.videos
});

export default connect(mapStateToProps, { getVideos })(Videos);
