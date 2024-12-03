import React from "react";

import Goto from './Goto';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Goto title={"Проекты"} pathTo={"projects"}/>
      <Goto title={"Опыт"} pathTo={"experience"}/>
      <Goto title={"Контакты"} pathTo={"contacts"}/>
    </div>
  );
};

export default Navbar;
