import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">VideoGames</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/"> -Overview</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/competitive"> -Competitive</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/top-games"> -TopGames</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newsletter"> -Newsletter</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
