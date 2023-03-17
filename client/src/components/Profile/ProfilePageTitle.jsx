import React from "react";
import Nav from "react-bootstrap/Nav";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const ProfilePageTitle = () => {
  return (
    <div className="pagetitle">
      <h1>Profile</h1>
      <Nav>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Users</Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb>
      </Nav>
    </div>
  );
};

export default ProfilePageTitle;
