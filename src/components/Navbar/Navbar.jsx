import React from 'react';
import './Navbar.scss';

function Navbar() {

  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="./home" className="nav-link">Главная</a>
        </li>
        <li className="nav-item">
          <a href="./sections" className="nav-link">Разделы</a>
        </li>
        <li className="nav-item">
          <a href="./about" className="nav-link">О сайте</a>
        </li>
        <li className="nav-item">
          <a href="./contact" className="nav-link">Контакты</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;