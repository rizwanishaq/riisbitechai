import React from "react";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <li className="nav-item d-block d-lg-none">
      <Link to="#" className="nav-link nav-icon search-bar-toggle ">
        <i className="bi bi-search"></i>
      </Link>
    </li>
  );
};

export default Search;
