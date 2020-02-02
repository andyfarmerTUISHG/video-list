import React from "react";
import Header from "./components/Header";
import Videos from "./components/Videos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const showIntro = true;
  let intro;
  if (showIntro) {
    intro = <p>Welcome to your custom media manager</p>;
  } else {
    intro = null;
  }
  return (
    <div className="App">
      <Header branding="Video Manager" />
      <div className="container">
        {intro}
        <Videos />
      </div>
    </div>
  );
}

export default App;
