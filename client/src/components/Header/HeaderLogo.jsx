import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  const [sidebar_toggle, setSidbar_Toggle] = useState(false);
  return (
    <div className="d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span className="d-none d-lg-block">RiisBiTech</span>
      </Link>
      <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={() => {
          setSidbar_Toggle(!sidebar_toggle);
          sidebar_toggle
            ? document.body.classList.add("toggle-sidebar")
            : document.body.classList.remove("toggle-sidebar");
        }}
      ></i>
    </div>
  );
};

export default HeaderLogo;
