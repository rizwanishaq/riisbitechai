import { useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Link
        className={`nav-link ${show ? "" : "collapsed"}`}
        data-bs-target="#tables-nav"
        data-bs-toggle="collapse"
        to="#"
        onClick={() => setShow(!show)}
      >
        <i className="bi bi-layout-text-window-reverse"></i>
        <span>Blogs</span>
        <i className="bi bi-chevron-down ms-auto"></i>
      </Link>
      <ul
        id="tables-nav"
        className={`nav-content collapse ${show ? "show" : ""}`}
        data-bs-parent="#sidebar-nav"
      >
        <li>
          <Link to="tables-general.html">
            <i className="bi bi-circle"></i>
            <span>General Tables</span>
          </Link>
        </li>
        <li>
          <Link to="tables-data.html">
            <i className="bi bi-circle"></i>
            <span>Data Tables</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Blogs;
