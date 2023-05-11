import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
import Slide1 from "../images/slide-1.jpg";
import Slide2 from "../images/slide-2.jpg";
import Slide3 from "../images/slide-3.jpg";

function Slider() {
  const [slidesLoaded, setSlidesLoaded] = useState(false);

  useEffect(() => {
    const images = [Slide1, Slide2, Slide3];
    Promise.all(
      images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    ).then(() => {
      setSlidesLoaded(true);
    });
  }, []);

  return (
    <div className="slider-container">
      {slidesLoaded && (
        <Carousel
          autoPlay
          interval={6000}
          infiniteLoop
          thumbWidth={120}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
        >
          <img src={Slide1} alt="img-1" />
          <img src={Slide2} alt="img-2" />
          <img src={Slide3} alt="img-3" />
        </Carousel>
      )}
      {!slidesLoaded && (
        <div id="load-spinner" className="slider-container">
          Chargement en cours...
        </div>
      )}
    </div>
  );
}

export default Slider;
