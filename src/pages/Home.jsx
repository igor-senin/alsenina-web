import React from "react";

import Goto from './Goto';
import Navbar from './Navbar';

import './Home.css';


const Copyright = () => {
  return (
    <div className="copyright">
      <div className="real-copyright">
        COPYRIGHT 2024 - Alina Senina
      </div>
      <div className="bottom-links">
        <Goto title={"Projects"} pathTo={"projects"} fontSize="15px"/>
        |
        <Goto title={"Experience"} pathTo={"experience"} fontSize="15px"/>
        |
        <Goto title={"Contacts"} pathTo={"contacts"} fontSize="15px"/>
      </div>
    </div>
  );
};

const Home = () => {
  const main_image = require('../assets/Home/first_page.png');

  return (
    <main>
      <div className="home-element">
        <Navbar/>
        <div className="main-image-container">
          <img
            className="main-image"
            src={main_image}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
