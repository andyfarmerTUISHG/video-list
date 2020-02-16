import React, { Component } from "react";
import { Consumer } from "../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

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

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, genre, mediaType } = this.state;

    //Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
    }
    if (genre === "") {
      this.setState({ errors: { genre: "Genre is required" } });
    }
    if (mediaType === "") {
      this.setState({ errors: { mediaType: "Media Type is required" } });
    }

    const newVideo = {
      id: uuid(),
      name,
      genre,
      mediaType
    };
    dispatch({
      type: "ADD_VIDEO",
      payload: newVideo
    });

    //clear web form with new state object
    this.setState({
      name: "",
      genre: "",
      mediaType: "",
      errors: {}
    });
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
