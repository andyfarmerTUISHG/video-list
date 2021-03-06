import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import Axios from "axios";
import { connect } from "react-redux";
import { getVideo, editVideo } from "../actions/videosActions";
import PropTypes from "prop-types";

class EditVideo extends Component {
  state = {
    name: "",
    genre: "",
    mediaType: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name, genre, mediaType } = nextProps.video;
    this.setState({
      name,
      genre,
      mediaType
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    //   const res = await Axios.get(
    //     `https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos/${id}`
    //   );
    this.props.getVideo(id);
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = async e => {
    e.preventDefault();
    const { name, genre, mediaType } = this.state;
    console.log(`in edit  submit - ${JSON.stringify(this.state)}`);
    //Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (genre === "") {
      this.setState({ errors: { genre: "Genre is required" } });
      return;
    }
    if (mediaType === "") {
      this.setState({ errors: { mediaType: "Media Type is required" } });
      return;
    }

    const { id } = this.props.match.params;
    //Create new object to send via AXIOS
    const updatedVideo = {
      id,
      name,
      genre,
      mediaType
    };
    //clear web form with new state object
    this.setState({
      name: "",
      genre: "",
      mediaType: "",
      errors: {}
    });

    this.props.editVideo(updatedVideo);
    // const res = await Axios.put(
    //   `https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos/${id}`,
    //   updatedVideo
    // );

    //Redirect to home page
    this.props.history.push("/");
  };

  render() {
    const { name, genre, mediaType, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Video</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this)}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name..."
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              name="genre"
              label="Genre:"
              type="text"
              placeholder="Enter Genre..."
              value={genre}
              onChange={this.onChange}
              error={errors.genre}
            />
            <TextInputGroup
              name="mediaType"
              label="Media Type:"
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Media Type..."
              value={mediaType}
              onChange={this.onChange}
              error={errors.mediaType}
            />
            <input
              type="submit"
              value="Edit Video"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

EditVideo.propTypes = {
  getVideo: PropTypes.func.isRequired,
  video: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  video: state.video.video
});

export default connect(mapStateToProps, { getVideo, editVideo })(EditVideo);
