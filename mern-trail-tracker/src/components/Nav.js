import React, { Component } from "react";
import {Link} from "react-router-dom";

class Nav extends Component {

  render(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="navbar-brand"> Trail Tracker </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="navbar-brand"> Trails </Link>
        </li>

        <li className="nav-item">
          <Link to="/create" className="navbar-brand"> Create Trail Log </Link>
        </li>

        <li className="nav-item">
          <Link to="/user" className="navbar-brand"> Create User </Link>
        </li>
      </ul>
    </nav>
  );
}};

export default Nav;
