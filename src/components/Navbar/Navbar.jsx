import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {

  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" exact>Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sections" className="nav-link">Разделы</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">О сайте</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">Контакты</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;