import React from "react";
import { Col, Button } from "react-bootstrap";

const SingleChoice = (props) => {
  const { date, img, title, desc } = props;
  return (
    <Col md={6}>
      <div className="d-flex shadow-lg h-100">
        <div className="image-box w-45">
          <img src={img} alt="service-img" />
        </div>
        <div className="info-box w-45 ms-3 d-flex align-items-center p-1">
          <div>
            <h2 className="mb-3 fs-2"> {title} </h2>
            <h5 className="mb-4"> {date} </h5>
            <p className="mb-5 text-secondary"> {desc.slice(0, 150)} </p>
            <Button variant="danger" className="mt-4 mb-3">
              {" "}
              Remove{" "}
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleChoice;
