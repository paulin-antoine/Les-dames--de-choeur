import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
import Slide1 from "../images/slide-1.jpg";
import Slide2 from "../images/slide-2.jpg";
import Slide3 from "../images/slide-3.jpg";

function Slider() {
  return (
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
  );
}

export default Slider;
