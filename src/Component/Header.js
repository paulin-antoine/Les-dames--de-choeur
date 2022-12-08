import React from "react";
import Logo from "../images/logo-3.png";
import "./Header.css";

function Header() {
  return (
    <header className="homeHeader">
      <div className="logo">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <nav className="headerNav">
        <ul>
          <li>
            <a href="accueil">Accueil</a>
          </li>
          <li>
            <a href="agenda">Agenda</a>
          </li>
          <li>
            <a href="concert">Photos</a>
          </li>
          <li>
            <a href="Presse">Presse</a>
          </li>
          <li>
            <a href="Partenaires">Partenaires et amis</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
