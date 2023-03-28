import React from "react";
import { useDevice } from "../../hooks/useDevice";
import { MdVisibility } from "react-icons/md";
import News from "../../components/DashBoard/News/News";
import Crypto from "../../components/DashBoard/Crypto/Crypto";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
// import WeatherCard from "../../components/DashBoard/WeatherCard/WeatherCard";
import ChatCard from "../../components/DashBoard/ChatCard/ChatCard";

const DashBoard = () => {
  const { visits } = useDevice();

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>
            Dashboard
            <Button className="position-relative" variant="light" disabled>
              <MdVisibility />
              <Badge
                pill
                bg="light"
                text="dark"
                className="position-absolute top-0 start-100 translate-middle"
              >
                {visits}
              </Badge>
            </Button>
          </h1>
        </div>

        <section className="section dashboard">
          <Row>
            <Col lg={4}>
              <Card>
                {/* <WeatherCard /> */}
                <ChatCard />
                {/* <News /> */}
              </Card>
            </Col>

            <Col lg={8}>
              <div className="col-12">
                <Crypto />
              </div>
            </Col>
          </Row>
        </section>
      </main>
      ;
    </>
  );
};

export default DashBoard;
