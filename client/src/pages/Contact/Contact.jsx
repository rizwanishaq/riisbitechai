import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Contact</h1>
        <Nav>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
            <Breadcrumb.Item href="/contact" active>
              Contact
            </Breadcrumb.Item>
          </Breadcrumb>
        </Nav>
      </div>

      <section className="section contact">
        <Row className="gy-4">
          <Col xl={6}>
            <Row>
              <Col lg={6}>
                <Card className="info-box">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>
                    A108 Adam Street,
                    <br />
                    New York, NY 535022
                  </p>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="info-box">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>
                    +1 5589 55488 55
                    <br />
                    +1 6678 254445 41
                  </p>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="info-box">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>
                    info@example.com
                    <br />
                    contact@example.com
                  </p>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="info-box">
                  <i className="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>
                    Monday - Friday
                    <br />
                    9:00AM - 05:00PM
                  </p>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col xl={6}>
            <Card className="p-4">
              <Form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
              >
                <Row className="gy-4">
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </Col>

                  <Col md={12}>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </Col>

                  <Col md={12} className="col-md-12">
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></Form.Control>
                  </Col>

                  <Col md={12} className="text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <Button type="submit">Send Message</Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Contact;
