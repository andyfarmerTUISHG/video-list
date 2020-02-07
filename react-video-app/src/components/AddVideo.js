import React, { Component } from "react";

export default class AddVideo extends Component {
  state = {
    name: "",
    genre: "",
    mediaType: ""
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { name, genre, mediaType } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Video</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                name="name"
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre:</label>
              <input
                name="genre"
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Genre..."
                value={genre}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mediaType">Media Type</label>
              <input
                name="mediaType"
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Media Type..."
                value={mediaType}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Add Video"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
