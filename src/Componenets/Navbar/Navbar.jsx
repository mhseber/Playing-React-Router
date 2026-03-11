import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/add">Add</Link>
        <Link to="/fire">Fire</Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
};

export default Navbar;
