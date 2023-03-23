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
            Hi, my name is Bryan Dalton and I am an experienced professional
            looking to break into the field of web development. I am from a
            small town and during high school, my family offered me my first job
            which involved helping out with minor and major projects for my
            family's real estate business. After graduating from George Mason
            University in 2017, I went back to work for my family's business.
            Unfortunately, due to economic decline, the housing market continued
            to suffer and it became unsustainable for me to continue along that
            path. I decided to make a change and look into my first passion:
            technology. I've had a fascination with technology from an early age
            and have been an avid gamer for most of my life with a passion for
            strategy and management games, like Civilization and Dwarf Fortress.
            In Sept 2022, I was accepted to the University of Richmond to
            explore a career in technology through their Full Stack Web
            Development course. During this course, I was able to work on
            projects both individually and as part of a team to learn how to
            create visually appealing, user friendly interfaces leveraging
            knowledge of programming languages, such as HTML, CSS, JavaScript,
            and React. I am looking forward to expanding my portfolio as I grow
            my career. Let's connect and talk about how we can bring your vision
            to life!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
