import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <Col xl={4}>
      <Card>
        <Card.Body className="card-body profile-card pt-4 d-flex flex-column align-items-center">
          <Card.Img
            src="assets/img/rizwanishaq.jpg"
            alt="Profile"
            height={120}
            width={120}
            className="rounded-circle"
          />
          <h2>Rizwan Ishaq</h2>
          <h3>AI Engineer</h3>
          <div className="social-links mt-2">
            <Link to="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProfileCard;
