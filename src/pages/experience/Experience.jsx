import React from "react";

import './Experience.css';

import Snail from '../Snail';
import Navbar from '../Navbar';

const Experience = () => {

  const timelinePath = require('../../assets/Timeline.png');

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
        
      </div>

      <div className="empty-space"/>
    </div>
  )
};

export default Experience;
