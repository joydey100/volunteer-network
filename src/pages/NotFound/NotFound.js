import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();

  const backToHome = (e) => {
    e.preventDefault();

    history.push("/");
  };

  return (
    <Container>
      <Row>
        <Col md={10} className="mx-auto text-center">
          <img
            src="https://medicare-react-project.web.app/static/media/error.4717b9a5.svg"
            alt="notfound-img"
            className="w-75 d-block mx-auto"
          />
          <h4 className="mb-3 text-center text-primary fs-2">
            OOps! Page Not Found
          </h4>
          <Button variant="primary" className="my-3" onClick={backToHome}>
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
