import React from "react";
import BannerTitle from "../Component/BannerTitle";
import "./NosMusiciensScreen.css";
/*optimize images files*/
import PhotoContainer2 from "../Component/PhotoContainer2.js";
import FredLasnier1 from "../images/Fred_Lasnier_1.jpg";
import FredLasnier2 from "../images/Fred_Lasnier_2.jpg";
import Michael1 from "../images/michael_1.jpg";
import Michael2 from "../images/michael_2.jpg";
import Philippe1 from "../images/Philippe_Vesin_1.jpg";
import Philippe2 from "../images/Philippe_Vesin_2.jpg";
import RoseReglat1 from "../images/Rose_Reglat_1.jpg";
import RoseReglat2 from "../images/Rose_Reglat_2.jpg";
import DidierLacombe1 from "../images/Didier_Lacombe_1.jpg";
import DidierLacombe2 from "../images/Didier_Lacombe_2.jpg";
import LaurenceDufour1 from "../images/Laurence_Dufour_1.jpg";
import LaurenceDufour2 from "../images/Laurence_Dufour_2.jpg";
import LoicLeGuillanton1 from "../images/Loic_Le_Guillanton_1.jpg";

export default function NotreCheffeScreen() {
  return (
    <div>
      <BannerTitle name="Nos musiciens" />
      <div className="global_img_block">
        <div className="first_img_block">
          <div id="rose">
            <PhotoContainer2
              src1={RoseReglat1}
              src2={RoseReglat2}
              name="Rose Reglat"
              desc="Piano"
            />
          </div>
          <div id="didier">
            <PhotoContainer2
              src1={DidierLacombe1}
              src2={DidierLacombe2}
              name="Didier Lacombe"
              desc="Violon"
            />
          </div>
        </div>
        <div id="michael">
          <PhotoContainer2
            src1={Michael1}
            src2={Michael2}
            name="Michael Geyre"
            desc="Accordéon"
          />
        </div>
      </div>
      <div id="grid_2">
        <div id="fred">
          <PhotoContainer2
            src1={FredLasnier1}
            src2={FredLasnier2}
            name="Fred Lasnier"
            desc="Contrebasse"
          />
        </div>
        <div id="philippe">
          <PhotoContainer2
            src1={Philippe1}
            src2={Philippe2}
            name="Philippe Vesin"
            desc="Batterie"
          />
        </div>

        <div id="laurence">
          <PhotoContainer2
            src1={LaurenceDufour1}
            src2={LaurenceDufour2}
            name="Laurence Dufour"
            desc="Violoncelle"
          />
        </div>
        <div id="loic">
          <figure className="photo_block_2">
            <img
              src={LoicLeGuillanton1}
              alt={"Loic Le Guillanton"}
              className="gallery_2"
            ></img>

            <div className="description_2">
              <p>Loic Le Guillanton</p>
              <p>Guitare</p>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}
