import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "../layout/TextInputGroup";
import Axios from "axios";

export default class EditVideo extends Component {
  state = {
    name: "",
    genre: "",
    mediaType: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await Axios.get(
      `https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos/${id}`
    );

    const { name, genre, mediaType } = res.data;
    this.setState({
      name,
      genre,
      mediaType
    });
  }

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, genre, mediaType } = this.state;

    dispatch({
      type: "ADD_VIDEO"
      // payload: res.data
    });
    //clear web form with new state object
    this.setState({
      name: "",
      genre: "",
      mediaType: "",
      errors: {}
    });
    //Redirect to home page
    this.props.history.push("/");
  };

  render() {
    const { name, genre, mediaType, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Video</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
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
        }}
      </Consumer>
    );
  }
}
