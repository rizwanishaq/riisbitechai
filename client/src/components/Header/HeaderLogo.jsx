import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";

const HeaderLogo = () => {
  const [sidebar_toggle, setSidbar_Toggle] = useState(false);

  useEffect(() => {
    if (sidebar_toggle) {
      document.body.classList.add("toggle-sidebar");
    } else {
      document.body.classList.remove("toggle-sidebar");
    }
  }, [sidebar_toggle]);

  return (
    <div className="d-flex align-items-center justify-content-between">
      <Nav.Link href="/" className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span className="d-none d-lg-block">RiisBiTech</span>
      </Nav.Link>
      <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={() => setSidbar_Toggle(!sidebar_toggle)}
      ></i>
    </div>
  );
};

export default HeaderLogo;
