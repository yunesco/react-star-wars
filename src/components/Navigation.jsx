import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header className="navigation">
    <Link className="logo" to="/">
      <h1>Star Wars</h1>
    </Link>
    <Link to="/search">
      <h1>Search</h1>
    </Link>
  </header>
);

export default Navigation;
