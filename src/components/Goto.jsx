import React from "react";
import { NavLink } from "react-router";

import './Goto.css';

const Goto = ({title, pathTo, fontSize}) => {
  const path = `/${pathTo}`;
  return (
    <NavLink to={path} style={{
      textDecoration: 'none',
      cursor: 'none',
    }} end>
      <button
        className="goto"
        style={{
          fontSize: `${fontSize}`
        }}
      >
        {title}
      </button>
    </NavLink>
  );
};

export default Goto;
