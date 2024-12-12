import React from "react";
import { Link } from "react-router-dom";

import './Goto.css';

const Goto = ({title, pathTo, fontSize}) => {
  const path = `/${pathTo}`;
  return (
    <Link to={path} style={{
      textDecoration: 'none',
      cursor: 'none',
    }}>
      <button
        className="goto"
        style={{
          fontSize: `${fontSize}`
        }}
      >
        {title}
      </button>
    </Link>
  );
};

export default Goto;
