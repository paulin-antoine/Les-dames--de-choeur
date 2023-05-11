import React from "react";
import BannerTitle from "../Component/BannerTitle";
import "./NotreCheffeScreen.css";
import PhotoContainer from "../Component/PhotoContainer";
import MarieCecile from "../images/marie_cecile_1.jpeg";
import MarieCecile2 from "../images/marie_cecile_2.jpg";
import MarieCecile3 from "../images/marie_cecile_3.jpg";
import MarieCecile4 from "../images/marie_cecile_4.jpg";

export default function NotreCheffeScreen() {
  return (
    <div>
      <BannerTitle name="Notre cheffe" />
      <div id="grid_1">
        <PhotoContainer image={MarieCecile} name="Marie-Cécile" />
        <img src={MarieCecile4} alt="Marie-Cécile" id="Marie-Cecile-4"></img>
        <PhotoContainer image={MarieCecile2} name="Marie-Cécile" />
        <div className="grid_desc_1">
          <h3>Marie-Cécile Robin-Héraud</h3>
          <h4>Artiste lyrique, comédienne et chef de choeur</h4>
          <p>- Barber Shop Quartet</p>
          <p>- Choeur de l'Opérade Bordeaux</p>
          <p>- Autour de Minuit</p>
          <p>- Les zingarelles</p>
          <p>- Quatuor Philéas</p>
          <p>- Dames de Choeur</p>
        </div>

        <PhotoContainer image={MarieCecile3} name="Marie-Cécile" />
      </div>
    </div>
  );
}
