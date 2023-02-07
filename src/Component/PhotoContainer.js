import React from "react";
import "./PhotoContainer.css";

export default function PhotoContainer(props) {
  return (
    <div id="photo_contain">
      <figure className="photo_block">
        <img src={props.image} alt={props.name} className="gallery"></img>
        <div className="description_2">
          {props.name}
          {props.desc}
        </div>
      </figure>
    </div>
  );
}
