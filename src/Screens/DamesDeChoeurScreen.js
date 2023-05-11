import React, { useState } from "react";
import "./DamesDeChoeurScreen.css";
import BannerTitle from "../Component/BannerTitle";
import "react-html5video/dist/styles.css";
import Video from "../vids/Dames_de_choeur_teaser.mp4";
import Ddc1 from "../images/Dames_de_choeur_1.jpeg";
import Ddc2 from "../images/Dames_de_choeur_2.jpeg";
import Ddc3 from "../images/Dames_de_choeur_3.PNG";
import Ddc4 from "../images/Dames_de_choeur_4.PNG";
import Ddc5 from "../images/Dames_de_choeur_5.PNG";
import Ddc6 from "../images/Dames_de_choeur_6.PNG";
import Ddc7 from "../images/Dames_de_choeur_7.PNG";
import Ddc8 from "../images/Dames_de_choeur_8.JPG";

const DamesDeChoeurScreen = () => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const zoomImg = (imgSrc) => {
    console.log(imgSrc);
    setZoomedImage(imgSrc);
  };
  const closeZoomImg = () => {
    setZoomedImage(null);
  };

  return (
    <div>
      <BannerTitle name="Les dames de choeur" />
      <div id="video_ddc_block">
        <video controls src={Video} type="video/mp4" id="video_ddc"></video>
      </div>
      <div id="ddc_gallery_block">
        <div id="ddc_first_block">
          <img
            src={Ddc5}
            alt="dames_de_choeur_5"
            id="ddc5"
            onClick={() => zoomImg(Ddc5)}
          ></img>
          <img
            src={Ddc7}
            alt="dames_de_choeur_7"
            onClick={() => zoomImg(Ddc7)}
          ></img>
        </div>
        <div id="ddc_second_block">
          <img
            src={Ddc1}
            alt="dames_de_choeur_1"
            id="ddc1"
            onClick={() => zoomImg(Ddc1)}
          ></img>
          <img
            src={Ddc2}
            alt="dames_de_choeur_2"
            id="ddc2"
            onClick={() => zoomImg(Ddc2)}
          ></img>
          <img
            src={Ddc3}
            alt="dames_de_choeur_3"
            id="ddc3"
            onClick={() => zoomImg(Ddc3)}
          ></img>
          <img
            src={Ddc4}
            alt="dames_de_choeur_4"
            id="ddc4"
            onClick={() => zoomImg(Ddc4)}
          ></img>
          <img
            src={Ddc6}
            alt="dames_de_choeur_6"
            id="ddc6"
            onClick={() => zoomImg(Ddc6)}
          ></img>
          <img
            src={Ddc8}
            alt="dames_de_choeur_8"
            id="ddc8"
            onClick={() => zoomImg(Ddc8)}
          ></img>
        </div>
      </div>
      {zoomedImage && (
        <div className="zoom-overlay" onClick={() => closeZoomImg(zoomedImage)}>
          <div className="zoomed-img-container">
            <img src={zoomedImage} alt="zoomed_image" className="zoomed-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DamesDeChoeurScreen;
