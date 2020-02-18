import React from "react";
import Videos from "../components/Videos";

function index() {
  const showIntro = true;
  let intro;
  if (showIntro) {
    intro = <p>Welcome to your custom media manager</p>;
  } else {
    intro = null;
  }
  return (
    <div>
      {intro}
      <Videos />
    </div>
  );
}

export default index;
