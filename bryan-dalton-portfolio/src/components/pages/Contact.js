import React from "react";
import BackBtn from "../BackBtn";

function Contact() {
  return (
    <div className="container">
      <BackBtn />
      <div className="aboutContainer">
        <div className="aboutCard">
          <h3>Contact Me:</h3>
          <div className="contactGrid">
          <p>Phone: (434) 250-5507</p>
            <a href='mailto:bryantdalton19@gmail.com'>bryantdalton19@gmail.com</a>
          <p><a href="https://www.linkedin.com/in/bryan-dalton1/"> Linkedin</a></p>
          <a href="https://github.com/Bryandalton"><img id='contactGit' alt='github white' src='/github-white.png'></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;