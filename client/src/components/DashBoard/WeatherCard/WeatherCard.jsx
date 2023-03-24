import React from "react";
import Card from "react-bootstrap/Card";

const WeatherCard = () => {
  return (
    <Card.Body>
      <Card.Title>
        Recent Activity <span>| Today</span>
      </Card.Title>

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
            Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
          </div>
        </div>
      </div>
    </Card.Body>
  );
};

export default WeatherCard;
