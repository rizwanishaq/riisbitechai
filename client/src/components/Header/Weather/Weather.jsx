import { useRef } from "react";
import Nav from "react-bootstrap/Nav";
import { useQuery } from "react-query";
import { useLocation } from "../../../hooks/useLocation";

const Weather = () => {
  const { location } = useLocation();
  const createStopwatch = () => {
    return () => {
      return new Date();
    };
  };
  const timerRef = useRef(createStopwatch());
  const { data: time } = useQuery("time", timerRef.current, {
    refetchInterval: 1000,
  });

  return (
    <Nav.Item className="pe-3">
      <span className="badge bg-success">{time?.toLocaleTimeString()}</span>
      {location.temperature && location.weather && (
        <Nav.Link
          href="#"
          className="nav-profile d-flex align-items-center pe-0"
        >
          {location.city.length > 0 ? `${location.city} ` : ""}
          {location.weather ? <img src={location.weather.icon} alt="" /> : ""}
          <span className="d-none d-md-block dropdown-toggle ps-2">
            {Math.ceil(location.temperature.temp)}&deg;
          </span>
        </Nav.Link>
      )}
    </Nav.Item>
  );
};

export default Weather;
