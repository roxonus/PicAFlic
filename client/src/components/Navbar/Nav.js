import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import fire from "../../firebase";
import "./Nav.css";
import * as ROUTES from "../../constants/routes";

const handleLogout = () => {
  fire.auth().signOut();
};
const Nav = () => (
  <div>
    <Router>
      <nav>
        <div className="nav-wrapper black">
          <a className="brand-logo">PicAFLic</a>
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to={ROUTES.LIBRARY} class=" blue lighten-1 btn">Library</Link>
            </li>
            <li>
            <a className="waves-effect red darken-4 btn" onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav">
            <li>
              <Link to={ROUTES.LIBRARY} class=" blue lighten-1 btn">Library</Link>
            </li>
            <li>
            <a className="waves-effect red darken-4 btn" onClick={handleLogout}>Logout</a>
            </li>
          </ul>
    </Router>
  </div>
);
export default Nav;