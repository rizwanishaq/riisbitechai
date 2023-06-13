import { useState } from "react";
import { Link } from "react-router-dom";
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
        {/* <li>
          <Link to="/eventdetection">
            <i className="bi bi-circle"></i>
            <span>Event Detection</span>
          </Link>
        </li> */}
        <li>
          <Link to="/stable_diffusion">
            <i className="bi bi-circle"></i>
            <span>StableDiffusion</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/chatgpt">
            <i className="bi bi-circle"></i>
            <span>ChatGPT Demo</span>
          </Link>
        </li> */}
        {/* <li>
          <Link to="/keywordextractor">
            <i className="bi bi-circle"></i>
            <span>Keyword Extractor</span>
          </Link>
        </li> */}

        <li>
          <Link to="/speech2text">
            <i className="bi bi-circle"></i>
            <span>Speech2Text</span>
          </Link>
        </li>
        {/* 
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
