// File: src/components/Navbar.jsx
import React from "react";

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">My React App</h1>
    <ul className="navbar-links">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
