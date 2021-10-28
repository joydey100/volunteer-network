import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SingleService = (props) => {
  const [bgColor, setBgColor] = useState("");
  // Random Color generator
  // --purple: #421fcf;
  // --sky: #3f90fc;
  // --yellow: #ffbd3e;
  // --orange: #ff7044;
  const getRandomColor = () => {
    const colors = ["#421fcf", "#3f90fc", "#ffbd3e", "#ff7044"];
    const index = Math.floor(Math.random() * 4);
    setBgColor(colors[index]);
  };

  if (bgColor === "") {
    getRandomColor();
  }

  const eventTitleBgStyle = {
    backgroundColor: bgColor,
  };

  //   Destructuring
  const { name, img, _id } = props;
  return (
    <Col lg={3} md={4}>
      <NavLink
        to={`/registration/${_id}`}
        className="border-0 text-decoration-none"
      >
        <div className="rounded shadow-lg h-100 single-service">
          <img src={img} alt="service-img" />
          <div
            className="service-info text-white d-flex align-items-center justify-content-center rounded py-4 px-2 text-center"
            style={eventTitleBgStyle}
          >
            <h5 className="fs-5"> {name}</h5>
          </div>
        </div>
      </NavLink>
    </Col>
  );
};

export default SingleService;
