import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ChangePassword = () => {
  return (
    <Form className="pt-3">
      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          Current Password
        </Form.Label>
        <div className="col-md-8 col-lg-9">
          <Form.Control type="password" placeholder="Current password" />
        </div>
      </Row>

      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          New Password
        </Form.Label>
        <div className="col-md-8 col-lg-9">
          <Form.Control type="password" placeholder="New password" />
        </div>
      </Row>

      <Row className="mb-3">
        <Form.Label className="col-md-4 col-lg-3 col-form-label">
          Re-enter New Password
        </Form.Label>
        <div className="col-md-8 col-lg-9">
          <Form.Control type="password" placeholder="Re-enter new password" />
        </div>
      </Row>

      <div className="text-center">
        <Button variant="primary" type="submit">
          Change Password
        </Button>
      </div>
    </Form>
  );
};

export default ChangePassword;
