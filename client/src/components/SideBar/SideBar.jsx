import React from "react";
import Nav from "react-bootstrap/Nav";
import Blogs from "./Blogs";
import MachineLearning from "./MachineLearning";
import MERN from "./MERN";

const SideBar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <Nav.Item>
          <Nav.Link className="nav-link " href="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <MachineLearning />
        </Nav.Item>
        <Nav.Item>
          <MERN />
        </Nav.Item>
        <Nav.Item>
          <Blogs />
        </Nav.Item>

        <li className="nav-heading">Pages</li>

        <Nav.Item>
          <Nav.Link className="collapsed" href="/profile">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className="nav-link collapsed" href="/faq">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className="nav-link collapsed" href="/contact">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className="nav-link collapsed" href="/register">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className="nav-link collapsed" href="login">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </Nav.Link>
        </Nav.Item>
      </ul>
    </aside>
  );
};

export default SideBar;
