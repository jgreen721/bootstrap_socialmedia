import React from "react";
import { FaSun } from "react-icons/fa";

const WeatherCard = () => {
  return (
    // <div className="ter">
    <div className="card text-center">
      <div className="card-header">
        <h1 className="me-5 mb-0">Weather</h1>
        <span>in</span>
        <h4 className="ms-5 mt-0">
          <em>Your</em> Area <FaSun style={{ color: "rgb(228, 228, 38)" }} />
        </h4>
      </div>
      <div className="d-flex align-items-center justify-content-center p-3">
        <p className="m-3">
          <strong>High:{(Math.random() * 25) | (0 + 75)}deg</strong>
        </p>
        <p className="m-3">
          <strong>Low:{(Math.random() * 5) | (0 + 60)}deg</strong>
        </p>
      </div>
    </div>
    // </div>
  );
};

export default WeatherCard;
