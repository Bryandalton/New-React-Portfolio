import React from "react";
import Project from "../project";
import NavBar from "../NavBar";

const projects = [
  {
    img: "./images/Paint Your Mood.png",
    name: "Paint your mood",
    link: "https://bryandalton.github.io/Paint-your-mood/",
    github: "https://github.com/Bryandalton/Paint-your-mood",
    description:
      "Website to display artwork from Chicago and Harvard art APIs.",
  },
  {
    img: "./images/kandy-karma.jpg",
    name: "Kandy Karma",
    link: "https://bryandalton.github.io/kandykarmafrontend/",
    github: "https://github.com/Bryandalton/kandykarmafrontend",
    description: "Mock market research site for candy.",
  },
  {
    img: "./images/WeatherServiceScreenshot.jpg",
    name: "Weather Service",
    link: "https://bryandalton.github.io/Weather-service/",
    github: "https://github.com/Bryandalton/Weather-service",
    description:
      "Displays the weather, five day forecast, and remembers last city selected.",
  },
  {
    img: "./images/Bigfootbutton.jpg",
    name: "Bigfoot Button",
    link: "https://codepen.io/Iwritebadcode/full/mdXdxpz",
    github: "https://codepen.io/Iwritebadcode/pen/mdXdxpz",
    description: 'Neon button that plays a "bigfoot" noise when clicked.',
  },
  {
    img: "./images/cryptsndbrd.png",
    name: "Cryptid Sound Board",
    link: "https://bryandalton.github.io/cryptidsoundboard/",
    github: "https://github.com/Bryandalton/cryptidsoundboard",
    description:
      "A fun and responsive site to see what sounds cryptids might make!",
  },
];

const featured = {
  img: "./images.mfhf.PNG",
  name: "My Favorite Historical Figures",
  link: "https://bryandalton.github.io/my_favorite_historical_figure/",
  github: "https://github.com/Bryandalton/my_favorite_historical_figure",
  description:
    "React site that offers a list of historical figures, shows a map of a location important to the active figure, and has a collapsible profile for the active figure.",
};

export default function Portfolio() {
  return (
    <div className="container">
      <NavBar />
      <div className="featured">
        <Project
          link={featured.link}
          img={featured.img}
          name={featured.name}
          github={featured.github}
          description={featured.description}
        />
      </div>

      <div className="project-grid">
        {projects.map((project) => {
          return (
            <Project
              link={project.link}
              img={project.img}
              name={project.name}
              github={project.github}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}
