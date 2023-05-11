import React from "react";
import "./ContactScreen.css";
import BackGroundContact from "../images/Background_contact.jpg";

export default function ContactScreen() {
  return (
    <div
      className="contact-background"
      style={{ backgroundImage: `url(${BackGroundContact})` }}
    >
      <div className="contact-part">
        <h3>Contact</h3>
        <h4>Vous souhaitez programmer les dames de choeur ?</h4>
        <p id="contact-name">Marie-Cécile ROBIN-HERAUD</p>
        <p id="contact-status">Cheffe de choeur</p>
        <a href="tel:0677830766">tel: 06.77.83.07.66</a>
        <a href="mailto:mc.heraud-robin@orange.fr">
          mail: mc.heraud-robin@orange.fr
        </a>
      </div>
    </div>
  );
}
