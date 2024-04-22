import "./App.css";
import Header from "./components/header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume"
import Carousel from "./components/carousel";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/carousel" element={<Carousel />}/>
      </Routes>
    </>
  );
}

export default App;
