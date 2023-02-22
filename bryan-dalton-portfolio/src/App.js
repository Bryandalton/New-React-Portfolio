import "./App.css";
import Header from './components/header'
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <div id="menu">
          <div id="menu-items">
            <Link className="menu-item" to="/portfolio">
              Portfolio
            </Link>
            <Link className="menu-item" to="/about">
              About
            </Link>
            <Link className="menu-item" to="/contact">
              Contact
            </Link>
          </div>
          <div id="menu-background-pattern"></div>
          <div id="menu-background-image"></div>
        </div>
      </Router>
    </>
  );
}

export default App;
