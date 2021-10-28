import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AllLists from "../../components/AllLists/AllLists";
import Event from "../../components/Event/Event";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import "./EventList.css";

const EventList = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={2} className="border-end border-4">
          <NavLink
            to="/lists"
            className="d-block text-decoration-none fs-5 mb-3"
          >
            {" "}
            All List
          </NavLink>
          <NavLink
            to="/add-event"
            className="d-block text-decoration-none fs-5 mb-3"
          >
            {" "}
            Add New Event
          </NavLink>
        </Col>
        <Col md={10}>
          <PrivateRoute exact path="/lists">
            <AllLists />
          </PrivateRoute>
          <PrivateRoute exact path="/add-event">
            <Event />
          </PrivateRoute>
        </Col>
      </Row>
    </Container>
  );
};

export default EventList;
