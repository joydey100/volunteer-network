import React, { useState } from "react";
import { Col, Form, Button, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Event = () => {
  const { user } = useAuth();
  const [addEvent, setAddEvent] = useState({
    title: "",
    desc: "",
    date: "",
    img: "",
  });

  const handleAddEvent = (e) => {
    e.preventDefault();

    const newEvent = {
      name: user.displayName,
      email: user.email,
      date: addEvent.date,
      title: addEvent.title,
      desc: addEvent.desc,
      img: addEvent.img,
    };

    // post to Database
    fetch("https://frozen-citadel-61625.herokuapp.com/post-event", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Great Job",
          text: "Thanks for creating a new Event",
          icon: "success",
          confirmButtonColor: "#0C64E6",
        });
      });
  };

  return (
    <Form onSubmit={handleAddEvent}>
      <Row className="g-4">
        {/* left Side */}
        <Col md={6} className="mx-md-auto border-end-3">
          <Form.Group className="mb-3">
            <Form.Label>Event Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add Title"
              required
              onBlur={(e) =>
                setAddEvent({ ...addEvent, title: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Add Description"
              required
              onBlur={(e) => setAddEvent({ ...addEvent, desc: e.target.value })}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          {/* select Date */}
          <Form.Group className="mb-3">
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              required
              placeholder="mm-dd-yyyy"
              min="1997-01-01"
              max="2080-12-31"
              onBlur={(e) => setAddEvent({ ...addEvent, date: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Host a image and give the link Here"
              required
              onBlur={(e) => setAddEvent({ ...addEvent, img: e.target.value })}
            />
          </Form.Group>
        </Col>
        <div className="text-end mt-4">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Row>
    </Form>
  );
};

export default Event;
