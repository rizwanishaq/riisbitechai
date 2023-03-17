import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "../../../hooks/useLocation";

const Weather = () => {
  const { location } = useLocation();
  console.log(location.weather.icon);
  return (
    <li className="nav-item dropdown pe-3">
      {location.temperature && location.weather && (
        <Link
          to="#"
          className="nav-link nav-profile d-flex align-items-center pe-0"
        >
          {location.city.length > 0 ? `${location.city} ` : ""}
          {location.weather ? <img src={location.weather.icon} alt="" /> : ""}
          <span className="d-none d-md-block dropdown-toggle ps-2">
            {Math.ceil(location.temperature.temp)}&deg;
          </span>
        </Link>
      )}
    </li>
  );
};

export default Weather;
