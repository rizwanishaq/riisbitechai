import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const EditProfile = () => {
  return (
    <Form className="pt-3">
      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          Profile Image
        </Form.Label>
        <Col md={8} lg={9}>
          <img src="assets/img/rizwanishaq.jpg" alt="Profile" />
          <div className="pt-2">
            <Link
              to="#"
              className="btn btn-primary btn-sm"
              title="Upload new profile image"
            >
              <i className="bi bi-upload"></i>
            </Link>{" "}
            <Link
              to="#"
              className="btn btn-danger btn-sm"
              title="Remove my profile image"
            >
              <i className="bi bi-trash"></i>
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          Full Name
        </Form.Label>
        <Col md={8} lg={9}>
          <Form.Control type="text" defaultValue="Rizwan Ishaq" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          About
        </Form.Label>
        <Col md={8} lg={9}>
          <Form.Control
            as="textarea"
            defaultValue="Sunt est soluta temporibus accusantium neque nam maiores cumque
            temporibus. Tempora libero non est unde veniam est qui dolor. Ut
            sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga
            sequi sed ea saepe at unde."
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          Company
        </Form.Label>
        <Col md={8} lg={9}>
          <Form.Control type="text" value="Lueilwitz, Wisoky and Leuschke" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          Job
        </Form.Label>
        <Col md={8} lg={9}>
          <Form.Control type="text" value="Web Designer" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          Country
        </Form.Label>
        <Col md={8} lg={9}>
          <input
            name="country"
            type="text"
            className="form-control"
            id="Country"
            value="USA"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label
          htmlFor="Address"
          className="col-md-4 col-lg-3 col-form-label"
        >
          Address
        </Form.Label>
        <Col md={8} lg={9}>
          <Form.Control
            type="text"
            className="form-control"
            value="A108 Adam Street, New York, NY 535022"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          Phone
        </Form.Label>
        <Col md={8} lg={9}>
          <Form.Control type="text" value="(436) 486-3538 x29071" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          Email
        </Form.Label>
        <Col md={8} lg={9}>
          <input
            name="email"
            type="email"
            className="form-control"
            id="Email"
            value="k.anderson@example.com"
          />
        </Col>
      </Row>

      <div className="text-center">
        <Button type="submit" variant="primary">
          Save Changes
        </Button>
      </div>
    </Form>
  );
};

export default EditProfile;
