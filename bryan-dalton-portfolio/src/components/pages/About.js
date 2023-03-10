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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            dolores autem praesentium dolorum officiis? Iusto velit, ab sapiente
            hic dolorum blanditiis molestias iste fugiat placeat delectus maxime
            expedita mollitia nobis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
