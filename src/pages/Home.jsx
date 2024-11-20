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
        <Goto title={"Анимация"} pathTo={"animation"}/>
        <Goto title={"Иллюстрация"} pathTo={"illustration"}/>
        <Goto title={"Опыт"} pathTo={"experience"}/>
        <Goto title={"Контакты"} pathTo="contacts"/>
      </div>
      <img
        src="resources/First_page_illustration.png"
        width="100%"
      />
    </div>
  );
};

export default Home;
