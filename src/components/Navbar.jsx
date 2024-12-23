import React from "react";

import Goto from './Goto';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Goto title={"Проекты"} pathTo={"projects"} fontSize="50px"/>
      <Goto title={"Опыт"} pathTo={"experience"} fontSize="50px"/>
      <Goto title={"Контакты"} pathTo={"contacts"} fontSize="50px"/>
    </div>
  );
};

export default Navbar;
