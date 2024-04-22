import React from "react";
import NavBar from "../NavBar";


function Contact() {
  <NavBar/>
  return (
    <div className="container">
      <NavBar />
      <div className="aboutContainer">
        <div className="aboutCard">
          <h3>Contact Me:</h3>
          <div className="contactGrid">
            <p>Phone: (202) 810-4464</p>
            <p><a href="mailto:bryantdalton19@gmail.com">
              bryantdalton19@gmail.com
            </a>
            </p>
            <a href="https://www.linkedin.com/in/bryan-dalton1/">
              {" "}
              <img
                className="contactLogo"
                id="contactLinkedin"
                alt="Linkedin"
                src="./images/linkedinWhite.png"
              ></img>
            </a>
            <a href="https://github.com/Bryandalton">
              <img
                className="contactLogo"
                id="contactGit"
                alt="github white"
                src="/github-white.png"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
