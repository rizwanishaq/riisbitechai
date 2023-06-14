import React from "react";
// import { useDevice } from "../../hooks/useDevice";
// import { MdVisibility } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Badge from "react-bootstrap/Badge";
// import Button from "react-bootstrap/Button";
import AvatarHome from "../../components/Avatar/AvatarHome";
import AvatarDashBoard from "../../components/TTSAvatar/AvatarDashBoard";
import RealTimeAvatar from "../../components/MicAvatar/RealTimeAvatar";

const DashBoard = () => {
  // const { visits } = useDevice();

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            Home
            {/* <Button className="position-relative" variant="light" disabled>
              <MdVisibility />
              <Badge
                pill
                bg="light"
                text="dark"
                className="position-absolute top-0 start-100 translate-middle"
              >
                {visits}
              </Badge>
            </Button> */}
          </h1>
        </div>

        <section className="section dashboard">
          <Row>
            <Col lg={4}>
              <AvatarHome />
            </Col>
            <Col lg={4}>
              <AvatarDashBoard />
            </Col>
            <Col lg={4}>
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
