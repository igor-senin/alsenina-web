import React from "react";
import { Link } from "react-router-dom";

import './ClickableImage.css';


const ClickableImage = ({pathTo, imgSrc}) => {
  return (
  <div className="clickable-image-container">
      <Link to={pathTo}>
        <img className="concrete-image" src={imgSrc}/>
      </Link>
  </div>
  );
};

export default ClickableImage;
