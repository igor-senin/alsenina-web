import React from "react";

import MiniNavbar from '../../../components/MiniNavbar';
import VideoPlayer from '../../../video/VideoPlayer';

import "./Flowwow.css";


const Flowwow = ({config}) => {
  const flowerPath = require("../../../assets/Flowers/Flower1.png");

  return (
    <div className="flowwow-page">
      <MiniNavbar/>

      <div className="left-empty-space"/>

      <div className="main-part">
        <img className="flower-1" src={flowerPath}/>

        <div className="flowwow-header">
          {config.title}
        </div>
        
        <div className="video-and-text video-first">
          <VideoPlayer
            videoSrc={config.videoPath[0]}
            width={"800px"}
          />

          <div style={{
            textAlign: "left",
            marginLeft: "50px",
            width: "500px",
          }}>
            {config.text[0]}
          </div>
        </div>

        <div className="video-and-text text-first">
          <div style={{
            textAlign: "right",
            marginRight: "50px",
            width: "500px",
          }}>
            {config.text[1]}
          </div>

          <VideoPlayer
            videoSrc={config.videoPath[1]}
            width={"800px"}
          />
        </div>
      </div>

      <div className="right-empty-space"/>
    </div>
  )
};

export default Flowwow;
