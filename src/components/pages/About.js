import React from "react";
import BackBtn from "../BackBtn";

function About() {
  return (
    <div className="container">
      <BackBtn />
      <div className="aboutContainer">
        <div className="aboutCard">
          <h3>About Me:</h3>
          <p>
            Graduate of the Uiversity of Richmond Fullstack Flex-coding Bootcamp looking to break into the field of web development. Experience with analytical thinking, problem solving, project management, strong team skills, and excellent written and verbal communication skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
