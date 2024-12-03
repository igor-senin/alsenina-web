import React from "react";

import ClickableImage from '../../components/ClickableImage';

import './Animation.css';


const imgPaths = [];
for (let i = 1; i <= 12; ++i) {
  imgPaths.push(require(`../../assets/Previews/preview_${i}.png`));
}

const Animation = () => {
  const path1 = require("../../assets/Projects/illustration_1.png");
  const path2 = require("../../assets/Projects/illustration_2.png");
  const path3 = require("../../assets/Projects/illustration_3.png");
  const path4 = require("../../assets/Projects/illustration_4.png");
  const path5 = require("../../assets/Projects/illustration_5.png");

  return (
  <main>
    <div className="animation-page">
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
            {imgPaths.map(path => <ClickableImage imgSrc={path} pathTo=""/>)}
          </div>
        </div>
        <div className="right-empty-space"/>
    </div>
  </main>
  )
};

export default Animation;
