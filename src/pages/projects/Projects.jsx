import React from "react";

import ClickableImage from '../../components/ClickableImage';
import MiniNavbar from '../../components/MiniNavbar';

import './Projects.css';


const Projects = ({previews, urls}) => {
  const path1 = require("../../assets/Projects/illustration_1.png");
  const path2 = require("../../assets/Projects/illustration_2.png");
  const path3 = require("../../assets/Projects/illustration_3.png");
  const path4 = require("../../assets/Projects/illustration_4.png");
  const path5 = require("../../assets/Projects/illustration_5.png");

  return (
  <main>
    <div className="animation-page">
        <MiniNavbar/>

        <img className="img-1" src={path1}/>
        <img className="img-2" src={path2}/>
        <img className="img-3" src={path3}/>
        <img className="img-4" src={path4}/>
        <img className="img-5" src={path5}/>

        <div className="left-empty-space"/>
        <div className="projects-list-part">
          <div className="animation-header">
            Проекты
          </div>
          <div className="projects-list">
            {urls.map((url, idx) => 
              <ClickableImage
                imgSrc={previews[idx]}
                pathTo={url}
              />
            )}
          </div>
        </div>
        <div className="right-empty-space"/>
    </div>
  </main>
  )
};

export default Projects;
