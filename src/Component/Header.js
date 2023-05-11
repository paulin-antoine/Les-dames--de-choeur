import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/accueil" id="accueil" className="link_nav">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/agenda" id="agenda" className="link_nav">
              Agenda
            </Link>
          </li>
          <li id="photos">
            <span className="link_nav">Photos & vidéos</span>
            <nav className="photoNav">
              <ul>
                <li>
                  <Link to="/notre_cheffe" className="link_nav">
                    Notre cheffe
                  </Link>
                </li>
                <li>
                  <Link to="/nos_musiciens" className="link_nav">
                    Nos musiciens
                  </Link>
                </li>
                <li>
                  <Link to="/dames_de_choeur" className="link_nav">
                    Les dames de choeur
                  </Link>
                </li>
              </ul>
            </nav>
          </li>

          <li>
            <Link to="/nos_partenaires" id="partenaires" className="link_nav">
              Partenaires et amis
            </Link>
          </li>
          <li>
            <Link to="/Contact" id="contact" className="link_nav">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
