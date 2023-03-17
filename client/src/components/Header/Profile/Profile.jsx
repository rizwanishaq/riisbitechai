import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "../../../hooks/useLocation";

const Profile = () => {
  const [show_profile, setShow_Profile] = useState(false);
  const { location } = useLocation();
  return (
    <li
      className="nav-item dropdown pe-3"
      onClick={() => setShow_Profile(!show_profile)}
    >
      <Link
        to="#"
        className={`nav-link nav-profile d-flex align-items-center pe-0 ${
          show_profile ? "show" : ""
        }`}
        data-bs-toggle="dropdown"
        aria-expanded={`${show_profile ? true : false}`}
      >
        <img
          src="assets/img/rizwanishaq.jpg"
          alt="Profile"
          className="rounded-circle"
        />
        <span className="d-none d-md-block dropdown-toggle ps-2">R. Ishaq</span>
      </Link>

      <ul
        className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow profile ${
          show_profile ? "show" : ""
        }`}
        style={{
          position: "absolute",
          inset: "0px 0px auto auto",
          margin: "0px",
          transform: "translate(-16px, 38px)",
        }}
      >
        <li className="dropdown-header">
          <h6>Rizwan Ishaq</h6>
          <span>AI Engineer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <Link
            className="dropdown-item d-flex align-items-center"
            to="/users-profile"
          >
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <Link
            className="dropdown-item d-flex align-items-center"
            to="/users-profile"
          >
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <Link
            className="dropdown-item d-flex align-items-center"
            to="/pages-faq"
          >
            <i className="bi bi-question-circle"></i>
            <span>Need Help?</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <Link className="dropdown-item d-flex align-items-center" to="#">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Profile;
