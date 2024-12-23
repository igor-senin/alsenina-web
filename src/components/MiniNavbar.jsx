import React from "react";

import Goto from './Goto';

import './MiniNavbar.css';


const MiniNavbar = () => {
  return (
  <div className="mini-navbar">
      <Goto title="Home" pathTo="home" fontSize="20px"/>
      <Goto title="Projects" pathTo="projects" fontSize="20px"/>
      <Goto title="Experience" pathTo="experience" fontSize="20px"/>
      <Goto title="Contacts" pathTo="contacts" fontSize="20px"/>
  </div>
  );
};

export default MiniNavbar;
