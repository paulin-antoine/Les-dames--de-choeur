import React from "react";
import "./BannerTitle.css";
import BackgroundTitle from "../images/title_banner.png";

export default function BannerTitle(props) {
  return (
    <div>
      <div
        className="banner_block"
        style={{
          backgroundImage: `url(${BackgroundTitle})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="title_banner_block">{props.name}</h2>
      </div>
    </div>
  );
}
