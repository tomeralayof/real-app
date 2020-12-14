import React, { Component } from 'react';
//link, navlink => to for the rought => import-rrd(for short run)
import {  NavLink, Link } from "react-router-dom";


class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
        <Link className="navbar-brand" to="/">Real App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">My Cards</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#">Sign-In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Sign-Up</Link>
            </li>
          </ul>
        </div>

</div>
      </nav>
     );
  }
}
 
export default Navbar;