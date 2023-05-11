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

export default function NosMusiciensScreen() {
  return (
    <div className="musicians_page">
      <BannerTitle name="Nos musiciens" />
      <div className="global_img_block">
        <div className="first_img_block">
          <div id="rose">
            <PhotoContainer2
              classChild="first_photo"
              src1={RoseReglat1}
              src2={RoseReglat2}
              name="Rose Reglat"
              desc="Piano"
            />
          </div>
          <div id="didier">
            <PhotoContainer2
              classChild="second_photo"
              src1={DidierLacombe1}
              src2={DidierLacombe2}
              name="Didier Lacombe"
              desc="Violon"
            />
          </div>
        </div>
        <div className="second_img_block">
          <div className="third_img_block">
            <div id="fred">
              <PhotoContainer2
                classChild="fourth_photo"
                src1={FredLasnier1}
                src2={FredLasnier2}
                name="Fred Lasnier"
                desc="Contrebasse"
              />
            </div>
            <div id="philippe">
              <PhotoContainer2
                classChild="fifth_photo"
                src1={Philippe1}
                src2={Philippe2}
                name="Philippe Vesin"
                desc="Batterie"
              />
            </div>
          </div>

          <div className="fourth_img_block">
            <div id="laurence">
              <PhotoContainer2
                classChild="sixth_photo"
                src1={LaurenceDufour1}
                src2={LaurenceDufour2}
                name="Laurence Dufour"
                desc="Violoncelle"
              />
            </div>
            <div id="loic">
              <figure className="photo_block_2 seventh_photo">
                <img
                  src={LoicLeGuillanton1}
                  alt={"Loic Le Guillanton"}
                  className="gallery_2"
                ></img>

                <div className="description_3">
                  <span>Loic Le Guillanton</span>
                  <span>Guitare</span>
                </div>
              </figure>
            </div>
          </div>
          <div id="michael">
            <PhotoContainer2
              classChild="third_photo"
              src1={Michael1}
              src2={Michael2}
              name="Michael Geyre"
              desc="Accordéon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
