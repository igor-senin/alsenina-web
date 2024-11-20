import React from "react";
import { Link } from "react-router-dom";

import './Goto.css';

const Goto = ({title, pathTo}) => {
  const path = `/${pathTo}`;
  return (
    <Link to={path} style={{textDecoration: 'none'}}>
      <button
        className="goto"
      >
        {title}
      </button>
    </Link>
  );
};

export default Goto;
