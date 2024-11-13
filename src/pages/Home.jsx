import React from "react";

import Snail from './Snail';
import Goto from './Goto';

import './Home.css';
import './Navbar.css';

const Home = () => {
  return (
    <div className="home-element">
      <div className="snail-container">
        <Snail/>
      </div>
      <div className="navbar">
        <Goto title={"Анимация"}/>
        <Goto title={"Иллюстрация"}/>
        <Goto title={"Опыт"}/>
        <Goto title={"Контакты"}/>
      </div>
    </div>
  );
};

export default Home;
