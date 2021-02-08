import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <Link to="/">Home</Link>
    <Link to="/works">Works</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </div>
);

export default Nav;
