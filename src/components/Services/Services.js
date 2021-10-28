import React from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Button,
  Row,
} from "react-bootstrap";
import useService from "../../hooks/useService";
import SingleService from "./SingleService";
import "./Services.css";

const Services = () => {
  // Get Services
  const { services } = useService();

  return (
    <section className="mt-5 pt-5">
      <Container>
        <h2 className="text-center text-uppercase main-title fs-2">
          {" "}
          I Grow by Helping People in Need
        </h2>

        {/* Search in Home Page */}
        <InputGroup className="my-4 w-50 mx-auto">
          <FormControl placeholder="Search" />
          <Button variant="primary">Search</Button>
        </InputGroup>

        {/* Main Services Section */}
        <Row className="g-4 my-5">
          {services.map((service) => (
            <SingleService key={service._id} {...service} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
