import React from "react";
import ChangePassword from "../../components/Profile/ChangePassword";
import EditProfile from "../../components/Profile/EditProfile";
import Overview from "../../components/Profile/Overview";
import Settings from "../../components/Profile/Settings";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProfileTabCard = () => {
  return (
    <Col xl={8}>
      <Card>
        <Card.Body className="pt-3">
          <Tabs
            defaultActiveKey="overview"
            id="uncontrolled-tab-example"
            className="nav nav-tabs nav-tabs-bordered"
          >
            <Tab eventKey="overview" title="Overview">
              <Overview />
            </Tab>
            <Tab eventKey="editprofile" title="Edit Profile">
              <EditProfile />
            </Tab>
            <Tab eventKey="settings" title="Settings">
              <Settings />
            </Tab>
            <Tab eventKey="changepassword" title="Change Password">
              <ChangePassword />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProfileTabCard;
