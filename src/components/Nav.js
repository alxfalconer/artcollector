import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.png"

function Nav() {

  const navStyle = {
    color: "white"
  };

  return ( 
    <nav>
      <a href="https://www.artic.edu/">
      <h3><img className="logo" src={logo} alt="logo"/></h3>
      </a>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/artworks">
        <li>Our Artworks</li>
        </Link>
        <Link style={navStyle} to="/collection">
        <li>Your Collection</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;