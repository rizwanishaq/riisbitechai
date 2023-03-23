import React from "react";
import { useDevice } from "../../hooks/useDevice";
import { MdVisibility } from "react-icons/md";
import News from "../../components/DashBoard/News/News";
import Crypto from "../../components/DashBoard/Crypto/Crypto";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const DashBoard = () => {
  const { visits } = useDevice();

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <Row>
            <Col lg={8}>
              <div className="col-12">
                <Crypto />
              </div>
              <Row>
                <Col xxl={4} md={6} className="col-xxl-4 col-md-6">
                  <Card className="info-card sales-card">
                    <Card.Body>
                      <Card.Title>Visits</Card.Title>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <MdVisibility />
                        </div>
                        <div className="ps-3">
                          <h6>{visits}</h6>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col lg={4}>
              <Card>
                <News />

                <div className="card-body">
                  <h5 className="card-title">
                    Recent Activity <span>| Today</span>
                  </h5>

                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                      <div className="activity-content">
                        Quia quae rerum{" "}
                        <a href="#" className="fw-bold text-dark">
                          explicabo officiis
                        </a>{" "}
                        beatae
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                      <div className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                      <div className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">1 day</div>
                      <i className="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                      <div className="activity-content">
                        Tempore autem saepe{" "}
                        <a href="#" className="fw-bold text-dark">
                          occaecati voluptatem
                        </a>{" "}
                        tempore
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 days</div>
                      <i className="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                      <div className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">4 weeks</div>
                      <i className="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                      <div className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit
                        quas
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </section>
      </main>
      ;
    </>
  );
};

export default DashBoard;
