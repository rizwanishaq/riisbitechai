import React from "react";
import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
const AvatarTemplate = () => {
  return (
    <Container fluid style={{ backgroundColor: "green" }}>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Col md={8}>
          <Card style={{ backgroundColor: "black" }}>
            <Card.Header>
              <Card.Title className="text-center text-red">AgentGPT</Card.Title>
            </Card.Header>
            <Card.Body>
              <Tab.Container defaultActiveKey="current-tasks">
                <Row>
                  <Col md={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link
                          eventKey="current-tasks"
                          style={{ color: "white" }}
                        >
                          Current tasks
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tools" style={{ color: "white" }}>
                          Tools
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="goal" style={{ color: "white" }}>
                          Goal
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Tab.Content>
            <Tab.Pane eventKey="current-tasks">
              <ul style={{ listStyleType: "none", color: "white" }}>
                <li>PlatformGPT: Write user code in a platformer game</li>
                <li>TrawlerGPT: Plan a crawl of a small town</li>
                <li>
                  ResearchGPT: Create a comprehensive report of data on a
                  company
                </li>
              </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="tools">
              {/* Add your code for the tools tab here */}
            </Tab.Pane>
            <Tab.Pane eventKey="goal">
              {/* Add your code for the goal tab here */}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Container>
  );
};

export default AvatarTemplate;
