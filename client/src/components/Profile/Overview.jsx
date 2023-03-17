import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Overview = () => {
  return (
    <div className="profile-overview">
      <h5 className="card-title">About</h5>
      <p className="small fst-italic">
        Sunt est soluta temporibus accusantium neque nam maiores cumque
        temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt
        iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed
        ea saepe at unde.
      </p>

      <h5 className="card-title">Profile Details</h5>

      <Row>
        <Col lg={3} md={4} className="label ">
          Full Name
        </Col>
        <Col lg={9} md={8}>
          Kevin Anderson
        </Col>
      </Row>

      <Row>
        <Col lg={3} md={4} className="label">
          Company
        </Col>
        <Col lg={9} md={8}>
          Lueilwitz, Wisoky and Leuschke
        </Col>
      </Row>

      <Row>
        <Col lg={3} md={4} className="label">
          Job
        </Col>
        <Col lg={9} md={8}>
          Web Designer
        </Col>
      </Row>

      <Row>
        <Col lg={3} md={4} className="label">
          Country
        </Col>
        <Col lg={9} md={8}>
          USA
        </Col>
      </Row>

      <Row>
        <Col lg={3} md={4} className="label">
          Address
        </Col>
        <Col lg={9} md={8}>
          A108 Adam Street, New York, NY 535022
        </Col>
      </Row>

      <Row>
        <Col lg={3} md={4} className="label">
          Phone
        </Col>
        <Col lg={9} md={8}>
          (436) 486-3538 x29071
        </Col>
      </Row>

      <Row>
        <Col lg={3} md={4} className="label">
          Email
        </Col>
        <Col lg={9} md={8}>
          k.anderson@example.com
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
