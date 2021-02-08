import React from 'react';
import { Link } from 'react-router-dom';
import works from '../data/works';

const NavWorks = () => (
  works.map((work) => (
    <Link key={work.slug} to={`/works/${work.slug}`}>{work.title}</Link>
  ))
);

export default NavWorks;
