import React, { Component } from "react";
import { Consumer } from "../context";
import TextInputGroup from "../layout/TextInputGroup";
import Axios from "axios";

export default class AddVideo extends Component {
  state = {
    name: "",
    genre: "",
    mediaType: "",
    errors: {}
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, genre, mediaType } = this.state;

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

    const newVideo = {
      name,
      genre,
      mediaType
    };

    const res = await Axios.post(
      "https://my-json-server.typicode.com/andyfarmerTUISHG/video-json/videos",
      newVideo
    );

    console.log(`we got a response ${JSON.stringify(res)}`);
    dispatch({
      type: "ADD_VIDEO",
      payload: res.data
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
              <div className="card-header">Add Video</div>
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
                    value="Add Video"
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
