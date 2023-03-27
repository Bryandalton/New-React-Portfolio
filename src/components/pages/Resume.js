import React from "react";
import BackBtn from "../BackBtn";
import NavBar from "../NavBar";


function Resume() {
  return (
    <div className="container">
      <NavBar />
      <BackBtn />
      <div className="aboutContainer">
        <iframe src="https://docs.google.com/document/d/16gbIQ7cgqvJb8J60lY5OzGAB4G_LgzMj9X61B_bXqUQ/preview" width="840" height="780" allow="autoplay" title='Bryan-Dalton-Resume'></iframe>
      </div>
    </div>
  );
}

export default Resume;