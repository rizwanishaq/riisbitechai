import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AvatarHome from "../../components/Avatar/AvatarHome";
import AvatarDashBoard from "../../components/TTSAvatar/AvatarDashBoard";
import RealTimeAvatar from "../../components/MicAvatar/RealTimeAvatar";
import SideTalkerHome from "../../components/SadTalkerAvatar/SideTalkerHome";

const DashBoard = () => {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle ">
          <h1>Avatar-Dimensions</h1>
        </div>

        <section className="section dashboard">
          <Row>
            <Col lg={3}>
              <AvatarHome />
            </Col>
            <Col lg={3}>
              <SideTalkerHome />
            </Col>
            <Col lg={3}>
              <AvatarDashBoard />
            </Col>
            <Col lg={3}>
              <RealTimeAvatar />
            </Col>
          </Row>
        </section>
      </main>
      ;
    </>
  );
};

export default DashBoard;
