import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAvatar } from "../../hooks/useAvatar";

const RealTimeAvatar = () => {
  const { start, setStart, responseData, error } = useAvatar();
  const stopHandler = (e) => {
    setStart(false);
  };

  const startHandler = (e) => {
    setStart(true);
  };
  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={startHandler} disabled={start}>
                <i className="fas fa-play"></i>Start
              </Nav.Link>
              <Nav.Link onClick={stopHandler} disabled={!start}>
                <i className="fas fa-stop-circle"></i>Stop
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default RealTimeAvatar;
