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
        <li>
          <Link to="/rq-parallel">Parallel Queries</Link>
        </li>
        <li>
          <Link to="/rq-dynamic-parallel">Dynamic Parallel Queries</Link>
        </li>
        <li>
          <Link to="/rq-dependent-queries">Dependent Queries</Link>
        </li>
        <li>
          <Link to="/rq-paginated-queries">Paginated Queries</Link>
        </li>
        <li>
          <Link to="/rq-infinite-queries">Infinite Queries</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
