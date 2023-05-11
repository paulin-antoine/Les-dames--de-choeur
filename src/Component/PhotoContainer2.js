import React, { useState, useEffect } from "react";
import "./PhotoContainer2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function PhotoContainer(props) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hiddenSrc, setHiddenSrc] = useState(props.src2);

  useEffect(() => {
    setHiddenSrc(photoIndex === 0 ? props.src2 : props.src1);
  }, [photoIndex, props.src1, props.src2]);

  const handleClickNext = () => {
    setPhotoIndex((photoIndex + 1) % 2);
  };

  const handleClickPrev = () => {
    setPhotoIndex((photoIndex - 1) % 2);
  };

  return (
    <div id="photo_contain_2">
      <figure className={`photo_block_2 ${props.classChild}`}>
        <img
          src={photoIndex === 0 ? props.src1 : hiddenSrc}
          alt={props.name}
          className={`gallery_2 ${photoIndex === 0 ? "fade-in" : "fade-out"}`}
        />
        <img
          src={photoIndex === 0 ? hiddenSrc : props.src1}
          alt={props.name}
          className={`gallery_2 ${photoIndex === 0 ? "fade-out" : "fade-in"}`}
        />
        <FontAwesomeIcon
          className="prev"
          icon={faChevronLeft}
          color="#EEEEEE"
          size="2x"
          opacity="0.9"
          onClick={handleClickPrev}
        />
        <FontAwesomeIcon
          className="next"
          icon={faChevronRight}
          color="#EEEEEE"
          size="2x"
          opacity="0.9"
          onClick={handleClickNext}
        />
        <div className="description_3">
          <span>{props.name}</span>
          <span>{props.desc}</span>
        </div>
      </figure>
    </div>
  );
}
