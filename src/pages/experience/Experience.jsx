import React from "react";

import './Experience.css';

import Snail from '../Snail';
import MiniNavbar from '../../components/MiniNavbar';

const Experience = () => {

  const timelinePath = require("../../assets/Experience/Illustration_9.png");
  const orangesPath = require("../../assets/Experience/Illustration_6.png");
  const leftBottomFlowerPath = require("../../assets/Experience/Illustration_8.png");
  const rightBottomFlowerPath = require("../../assets/Experience/Illustration_7.png");

  return (
    <div className="experience-page">
    <MiniNavbar/>
    <div className="empty-space"/>

    <div className="experience-page-main-part">
      <div className="experience-header">
        Опыт
      </div>
      <div className="snail-container">
        <Snail/>
      </div>
      <div className="timeline-container">
      <img
        className="timeline-pic"
        src={timelinePath}
      />
      </div>

      <div className="main-text">
      <div className="title">
      Образование
      </div>
      <div className="some-text">
      <div className="text-block">
       1. 2018-2022 бакалавриат Art and Design School HSE, анимация и иллюстрация <br/>
       2. 2023-2025 неоконченная магистратура Art and Design School HSE, анимация <br/>
       3. 2024-2025 UX/UI, Bang Bang Education <br/>
       </div>
       </div>

      <div className="title">
      Навыки
      </div>
      <div className="some-text">
      <div className="text-block">
      2D анимация, иллюстрация, комиксы, режиссура, графический дизайн, игровой дизайн, продюсирование, преподавание
      </div>
     </div>

      <div className="title">
      Программы
      </div>
      <div className="some-text">
      <div className="text-block">
      Adobe Photoshop, Adobe Illustrator, Adobe Animate, After Effects, Toon Boom Harmony, Procreate, Rough Animation, Readymag, Maya, Ableton Live, Figma
      </div>
      </div>

      <div className="oranges-container">
      <img
        className="oranges-pic"
        src={orangesPath}
      />
      </div>

      </div>

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
