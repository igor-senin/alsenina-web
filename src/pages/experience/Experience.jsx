import React from "react";

import './Experience.css';

import Snail from '../Snail';
import Navbar from '../Navbar';

const Experience = () => {

  const timelinePath = require("../../assets/Experience/Illustration_9.png");
  const orangesPath = require("../../assets/Experience/Illustration_6.png");
  const leftBottomFlowerPath = require("../../assets/Experience/Illustration_8.png");
  const rightBottomFlowerPath = require("../../assets/Experience/Illustration_7.png");

  return (
    <div className="experience-page">
      <div className="empty-space"/>
      <div>
        <Navbar/>
        <div className="experience-header">
          Опыт
        </div>
        <div className="snail-container">
          <Snail/>
        </div>
        <img
          className="timeline"
          src={timelinePath}
        />

        <img
          className="oranges"
          src={orangesPath}
        />

        <img
          className="left-bottom-flower"
          src={leftBottomFlowerPath}
        />
        <img
          className="right-bottom-flower"
          src={rightBottomFlowerPath}
        />
        
      </div>

      <div className="empty-space"/>
    </div>
  )
};

export default Experience;
