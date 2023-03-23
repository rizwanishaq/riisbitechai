import React from "react";
import Nav from "react-bootstrap/Nav";
import Blogs from "./Blogs";
import MachineLearning from "./MachineLearning";
import MERN from "./MERN";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <Nav.Item>
          <NavLink className="nav-link " to="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </NavLink>
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

        {/* <li className="nav-heading">Pages</li> */}

        {/* <Nav.Item>
          <NavLink className="nav-link collapsed" to="/profile">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link collapsed" to="/faq">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link collapsed" to="/contact">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link collapsed" to="/register">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link collapsed" to="login">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </NavLink>
        </Nav.Item> */}
      </ul>
    </aside>
  );
};

export default SideBar;
