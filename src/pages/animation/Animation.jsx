import React from "react";

import ClickableImage from '../../components/ClickableImage';

import './Animation.css';


const imgPaths = [];
for (let i = 1; i <= 12; ++i) {
  imgPaths.push(require(`../../assets/Previews/preview_${i}.png`));
}

const Animation = () => {
  const path_1_2 = require('../../assets/Second_page_element1-2.png');
  const path_3 = require('../../assets/Second_page_element3.png');
  const path_4 = require('../../assets/Second_page_element4.png');

  return (
  <div className="animation-page">
      <div className="elements-1_2">
        <img className="concrete-img-1_2" src={path_1_2}/>
      </div>
      <div className="element-3">
        <img className="concrete-img-3" src={path_3}/>
      </div>
      <div className="element-4">
        <img className="concrete-img-4" src={path_4}/>
      </div>

      <div className="left-empty-space"/>
      <div className="projects-list-part">
        <div className="animation-header">
          Проекты
        </div>
        <div className="projects-list">
          {imgPaths.map(path => <ClickableImage imgSrc={path} pathTo=""/>)}
        </div>
      </div>
      <div className="right-empty-space"/>
  </div>
  )
};

export default Animation;
