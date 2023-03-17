import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const Settings = () => {
  return (
    <Form className="pt-3">
      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          Email Notifications
        </Form.Label>
        <Col md={8} lg={9}>
          <Form.Check type="checkbox" label="Changes made to your account" />
          <Form.Check
            type="checkbox"
            label="Information on new products and services"
          />
          <Form.Check type="checkbox" label="Marketing and promo offers" />
          <Form.Check type="checkbox" label="Security alerts" />
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

export default Settings;
