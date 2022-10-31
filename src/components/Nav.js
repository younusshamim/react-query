import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/super-heroes">Traditional Super Heroes</Link>
        </li>

        <li>
          <Link to="/rq-super-heroes">Rq Super Heroes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
