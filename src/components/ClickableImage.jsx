import React from "react";
import { useNavigate } from "react-router";

import { styled } from '@mui/system';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './ClickableImage.css';


const ClickableImage = ({pathTo, imgSrc}) => {
  const Chevron = styled(ChevronRightIcon)({
    position: "absolute",
    top: "35%",
    left: "45%",
  });

  let navigate = useNavigate();

  return (
    <div
      className="clickable-image-container"
      onClick={() => navigate(pathTo)}
    >
      <img
        className="concrete-image"
        src={imgSrc}
      />

      <div className="chevron-container">
        <Chevron sx={{ fontSize: "60px" }}/>
      </div>
    </div>
  );
};

export default ClickableImage;
