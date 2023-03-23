import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const MachineLearning = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Nav.Link
        className="collapsed"
        data-bs-target="#components-nav"
        data-bs-toggle="collapse"
        to="#"
        onClick={() => setShow(!show)}
      >
        <i className="bi bi-robot"></i>
        <span>Machine Learning</span>
        <i className="bi bi-chevron-down ms-auto"></i>
      </Nav.Link>
      <ul
        id="components-nav"
        className={`nav-content collapse ${show ? "show" : ""}`}
        data-bs-parent="#sidebar-nav"
      >
        <li>
          <Link to="/eventdetection">
            <i className="bi bi-circle"></i>
            <span>Event Detection</span>
          </Link>
        </li>
        <li>
          <Link to="/stable_diffusion">
            <i className="bi bi-circle"></i>
            <span>StableDiffusion</span>
          </Link>
        </li>
        <li>
          <Link to="/chatgpt">
            <i className="bi bi-circle"></i>
            <span>ChatGPT Demo</span>
          </Link>
        </li>

        {/* 
        <li>
          <Link to="/breadcrumbs">
            <i className="bi bi-circle"></i>
            <span>Breadcrumbs</span>
          </Link>
        </li>
        <li>
          <Link to="/buttons">
            <i className="bi bi-circle"></i>
            <span>Buttons</span>
          </Link>
        </li>
        <li>
          <Link to="/cards">
            <i className="bi bi-circle"></i>
            <span>Cards</span>
          </Link>
        </li>
        <li>
          <Link to="/carousel">
            <i className="bi bi-circle"></i>
            <span>Carousel</span>
          </Link>
        </li>  */}
      </ul>
    </>
  );
};

export default MachineLearning;
