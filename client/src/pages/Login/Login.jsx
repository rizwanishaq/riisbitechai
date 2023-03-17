import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <main>
      <Container>
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <Container>
            <Row className="justify-content-center">
              <Col
                lg={4}
                md={6}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <div className="d-flex justify-content-center py-4">
                  <Link
                    to="/"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">RiisBiTech</span>
                  </Link>
                </div>

                <Card className="mb-3">
                  <Card.Body>
                    <div className="pt-4 pb-2">
                      <Card.Title className="text-center pb-0 fs-4">
                        Login to Your Account
                      </Card.Title>
                      <p className="text-center small">
                        Enter your username & password to login
                      </p>
                    </div>

                    <Form className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <Form.Label>Username</Form.Label>
                        <Form.Group className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                          <Form.Control type="text" name="username" required />
                          <div className="invalid-feedback">
                            Please enter your username.
                          </div>
                        </Form.Group>
                      </div>

                      <div className="col-12">
                        <Form.Label htmlFor="yourPassword">Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>

                      <div className="col-12">
                        <Form.Check
                          type="checkbox"
                          label="Remember me"
                          value={true}
                        />
                      </div>
                      <div className="col-12">
                        <Button
                          variant="primary"
                          className="w-100"
                          type="submit"
                        >
                          Login
                        </Button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Don't have account?{" "}
                          <Link to="/register">Create an account</Link>
                        </p>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>

                <div className="credits">
                  Designed by{" "}
                  <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </main>
  );
};

export default Login;
