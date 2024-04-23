import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div id="menu">
      <div id="menu-items">
        <Link className="menu-item" to="/carousel">
          Portfolio
        </Link>
        <Link className="menu-item" to="/about">
          About
        </Link>
        <Link className="menu-item" to="/contact">
          Contact
        </Link>
        <Link className="menu-item" to="/resume">
        Resume
        </Link>
      </div>
      <div id="menu-background-pattern"></div>
      <div id="menu-background-image"></div>
    </div>
  );
}
  