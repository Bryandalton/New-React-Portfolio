import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Project from "./project";
import "./carousel.css";

const projects = [
  {
    img: "./images/mfhf.PNG",
    name: "My Favorite Historical Figures",
    link: "https://bryandalton.github.io/my_favorite_historical_figure/",
    github: "https://github.com/Bryandalton/my_favorite_historical_figure",
    type:"Website: React",
    description:
      "React site that offers a list of historical figures, shows a map of a location important to the active figure, and has a collapsible profile for the active figure.",
  },
  {
    img: "./images/cryptsndbrd.PNG",
    name: "Cryptid Sound Board",
    link: "https://bryandalton.github.io/cryptidsoundboard/",
    github: "https://github.com/Bryandalton/cryptidsoundboard",
    type:"Website: React",
    description:
      "A fun and responsive site to see what sounds cryptids might make!",
  },
  {
    img: "./images/kandy-karma.JPG",
    name: "Kandy Karma",
    link: "https://bryandalton.github.io/kandykarmafrontend/",
    github: "https://github.com/Bryandalton/kandykarmafrontend",
    type:"Website: React ",
    description: "Mock market research site for candy.",
  },
  {
    img: "./images/WeatherServiceScreenshot.jpg",
    name: "Weather Service",
    link: "https://bryandalton.github.io/Weather-service/",
    github: "https://github.com/Bryandalton/Weather-service",
    type:"Website",
    description:
      "Displays the weather, five day forecast, and remembers last city selected.",
  },
  {
    img: "./images/Bigfootbutton.jpg",
    name: "Bigfoot Button",
    link: "https://codepen.io/Iwritebadcode/full/mdXdxpz",
    github: "https://codepen.io/Iwritebadcode/pen/mdXdxpz",
    type:"Website",
    description: 'Neon button that plays a "bigfoot" noise when clicked.',
  },
  {
    img: "./images/Paint Your Mood.png",
    name: "Paint your mood",
    link: "https://bryandalton.github.io/Paint-your-mood/",
    github: "https://github.com/Bryandalton/Paint-your-mood",
    type:"Website",
    description:
      "Website to display artwork from Chicago and Harvard art APIs.",
  },
];

export default function Carousel() {
  const [sliderIndex, setSliderIndex] = useState(0);
  useEffect(() => {
    document.documentElement.style.setProperty("--slider-index", sliderIndex);
  }, [sliderIndex]);

  const onNextClick = () => {
    setSliderIndex(prev => prev + 1);
  };
  const onPrevClick = () => {
    setSliderIndex(prev => prev - 1);
  };
  return (
    <>
      <NavBar />
      <h3 className="cHeader">My projects:</h3>
      <div className="carousel-container">
        <button onClick={onPrevClick} className="handle left-handle">&#8249;</button>
        <div className="slider">
          {projects.map((project) => {
            return (
              <Project
                key={project.name}
                link={project.link}
                img={project.img}
                name={project.name}
                github={project.github}
                type={project.type}
                description={project.description}
              />
            );
          })}
        </div>
        <button onClick={onNextClick} className="handle right-handle">
          &#8250;
        </button>
      </div>
    </>
  );
}
