import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import "./NosPartenairesScreen.css";
import BarberShop from "../images/Barber_shop.jpg";
import Artemuse from "../images/logo_Artemuse.jpg";
import Cdc from "../images/logo_CDC.jpg";
import Griiise from "../images/Griiise.jpg";
import NuitBlanche from "../images/Nuit_Blanche.jpg";
import StudioPollux from "../images/Studio_Pollux.jpeg";
import ChoeurEtConcert from "../images/Choeur_et_concert.jpg";

export default function NosPartenairesScreen() {
  const handleBarberShopClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="partner_title_block">
      <div className="partner_title">
        <h3>
          <FontAwesomeIcon icon={faHandHoldingHeart} /> &nbsp;Nos partenaires et
          amis
        </h3>
      </div>
      <div className="partner_list">
        <div className="first_line_partner">
          <img
            src={BarberShop}
            id="photo_barber"
            className="partner_link"
            alt="Barber-shop-quartet"
            title="Visitez le site !"
            onClick={() =>
              handleBarberShopClick("https://www.barber-shop-quartet.net/")
            }
          />
          <img src={Artemuse} id="photo_artemuse" alt="Artemuse" />
          <img
            src={Cdc}
            id="photo_cdc"
            className="partner_link"
            alt="CDC"
            title="Visitez le site !"
            onClick={() =>
              handleBarberShopClick("http://www.cdc-portesentredeuxmers.fr/")
            }
          />
        </div>
        <div className="second_line_partner">
          <img
            src={Griiise}
            id="photo_griiise"
            className="partner_link"
            alt="Les-pieces-jointes"
            title="Visitez le site !"
            onClick={() =>
              handleBarberShopClick(
                "https://lespiecesjointes.wixsite.com/les-pieces-jointes"
              )
            }
          />
          <img
            src={NuitBlanche}
            id="photo_nuit_blanche"
            alt="Nuit-blanche-trio"
          />
          <img
            src={StudioPollux}
            id="photo_pollux"
            className="partner_link"
            alt="studio-pollux"
            title="Visitez le site !"
            onClick={() =>
              handleBarberShopClick(
                "https://www.terresneuves-lespoles.fr/les-poles/pole-image-son/paul-robin/"
              )
            }
          />
        </div>
        <img
          src={ChoeurEtConcert}
          id="photo_choeur_et_concert"
          alt="Choeur-&-concert"
        />
      </div>
    </div>
  );
}
