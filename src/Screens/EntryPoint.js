import React from "react";
import Logo from "../images/logo-3.png";
import "./EntryPoint.css";
import "../Component/Bubble";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function EntryPoint() {
  return (
    <div id="hello">
      <img src={Logo} alt="logo" className="logo" />
      <div className="link_home_page">
        <a href="accueil">
          Bienvenue
          <FontAwesomeIcon icon={faArrowRight} className="arrow" />
        </a>
      </div>
    </div>
  );
}
