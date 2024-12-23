import React from "react";

import Navbar from '../components/Navbar';

import './Home.css';

const Home = () => {
  const mainImage = require('../assets/Home/first_page.png');

  return (
    <main>
      <div className="home-element">
        <Navbar/>
        <div className="main-image-container">
          <img
            className="main-image"
            src={mainImage}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
