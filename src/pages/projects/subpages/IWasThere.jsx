import React from "react";

import MiniNavbar from '../../../components/MiniNavbar';
import VideoPlayer from '../../../video/VideoPlayer';

import "./IWasThere.css";


const IWasThere = ({config}) => {
  const flowerPath = require("../../../assets/Flowers/Flower6.png");

  return (
    <div className="page">
      <MiniNavbar/>

      <div className="left-empty-space"/>

      <div className="main-part">
        <img className="flower-1" src={flowerPath}/>

        <div className="page-header">
          {config.title}
        </div>
        
        <VideoPlayer
          videoSrc={config.videoPath}
          width={"1300px"}
        />

        <div style={{
          textAlign: "left",
          width: "100%",
          marginTop: "50px",
        }}>
          {config.text[0]}
        </div>
      </div>

      <div className="right-empty-space"/>
    </div>
  )
};

export default IWasThere;
