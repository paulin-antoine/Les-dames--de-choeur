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
            <a href="accueil" id="accueil">
              Accueil
            </a>
          </li>
          <li>
            <a href="agenda" id="agenda">
              Agenda
            </a>
          </li>
          <li id="photos">
            <a href="photos_&_videos">Photos & vidéos</a>
            <nav className="photoNav">
              <ul>
                <li>
                  <a href="notre_cheffe">Notre cheffe</a>
                </li>
                <li>
                  <a href="nos_musiciens">Nos musiciens</a>
                </li>
                <li>
                  <a href="dames_de_choeur">Les dames de choeur</a>
                </li>
              </ul>
            </nav>
          </li>

          <li>
            <a href="Partenaires" id="partenaires">
              Partenaires et amis
            </a>
          </li>
          <li>
            <a href="Contact" id="contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
