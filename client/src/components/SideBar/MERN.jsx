import { useState } from "react";
import { Link } from "react-router-dom";
const MERN = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Link
        className={`nav-link ${show ? "" : "collapsed"}`}
        data-bs-target="#forms-nav"
        data-bs-toggle="collapse"
        to="#"
        aria-expanded={show ? false : true}
        onClick={() => setShow(!show)}
      >
        <i className="bi bi-journal-text"></i>
        <span>MERN</span>
        <i className="bi bi-chevron-down ms-auto"></i>
      </Link>
      <ul
        id="forms-nav"
        className={`nav-content collapse ${show ? "show" : ""}`}
        data-bs-parent="#sidebar-nav"
      >
        <li>
          <Link to="forms-elements.html">
            <i className="bi bi-circle"></i>
            <span>Form Elements</span>
          </Link>
        </li>
        <li>
          <Link to="forms-layouts.html">
            <i className="bi bi-circle"></i>
            <span>Form Layouts</span>
          </Link>
        </li>
        <li>
          <Link to="forms-editors.html">
            <i className="bi bi-circle"></i>
            <span>Form Editors</span>
          </Link>
        </li>
        <li>
          <Link to="forms-validation.html">
            <i className="bi bi-circle"></i>
            <span>Form Validation</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MERN;
