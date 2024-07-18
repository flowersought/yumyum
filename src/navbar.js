import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      buffet clearers
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/homepage">homepage</a>
      </li>
      <li>
        <a href="/vegetable">vegetarian</a>
      </li>
      <li>
        <a href="/halal">halal</a>
      </li>
    </ul>
  </div>

</nav>
);
};

export default Navbar;