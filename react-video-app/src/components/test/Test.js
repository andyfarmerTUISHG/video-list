import React, { Component } from "react";

export class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    console.log("componendid mount");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  // componentWillMount() {
  //   console.log("componen will mount");
  // }

  // componentDidUpdate() {
  //   console.log("this.componentDidUpdate");
  // }
  // componentWillUpdate() {
  //   console.log("this.componentWillUpdate");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(`getDerivedStateFromProps`);
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(`getSnapshotBeforeUpdate...`);
  // }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
