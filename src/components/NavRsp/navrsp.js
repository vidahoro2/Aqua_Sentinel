import React from 'react';
import './navrsp.css';
import logo1 from '../../assets/images/creserLogo2.png'

const NavbarR = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={logo1} alt="Logo" className="navbar__logo" />
      </div>
      <div className="navbar__right">
        <ul className="navbar__links">
          <li className="navbar__link"><a href="/escuelapadres">Escuela de Padres</a></li>
          <li className="navbar__link"><a href="/academiadocentes">Academia Docentes</a></li>
          <li className="navbar__link"><a href="/colegiosfelices">Colegios Felices</a></li>
          <li className="navbar__link"><a href="/eventos">Eventos</a></li>
          <li className="navbar__link"><a href="/creSerenelaula">CreSer en el Aula</a></li>
        </ul>
        <button className="navbar__login">Login</button>
      </div>
    </nav>
  );
};

export default NavbarR;