import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Registration = () => {
  const [service, setSerivce] = useState({});
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [desc, setDesc] = useState("");
  const { user, setLoading } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://frozen-citadel-61625.herokuapp.com/registration/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setSerivce(data);
      });
  }, [id, setLoading]);

  // handle volunteer service
  const handleVolunteerService = (e) => {
    setError("");
    // prevent reload
    e.preventDefault();

    // condition Checking
    if (date === "") {
      setError("You have to give a Date to Participate");
      return;
    } else if (desc === "") {
      setError("You have to give a Description");
      return;
    }

    const myChoice = {
      name: user.displayName,
      email: user.email,
      title: service.name,
      id,
      date,
      desc,
      img: service.img,
    };

    // post to Database
    fetch("https://frozen-citadel-61625.herokuapp.com/post-event", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myChoice),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Great Job",
          text: "Thanks for joining our camp",
          icon: "success",
          confirmButtonColor: "#0C64E6",
        });
      });
  };

  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <Card className="shadow-lg p-4">
              <h4 className="fs-2 my-4"> Register as a Volunteer</h4>

              {/* Registration Forms */}
              <Form onSubmit={handleVolunteerService}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    value={user.displayName}
                    readOnly
                  />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    readOnly
                  />
                </Form.Group>

                {/* Volunteer Service */}
                <Form.Group className="mb-3">
                  <Form.Label>Volunteer Service</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="volunteer name"
                    value={service.name ? service.name : ""}
                    readOnly
                  />
                </Form.Group>

                {/* select Date */}
                <Form.Group className="mb-3">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control
                    type="date"
                    onBlur={(e) => setDate(e.target.value)}
                    required
                    placeholder="mm-dd-yyyy"
                    min="1997-01-01"
                    max="2080-12-31"
                  />
                </Form.Group>

                {/* Description */}
                <Form.Group className="my-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    onBlur={(e) => setDesc(e.target.value)}
                    required
                  />
                </Form.Group>

                {/* Error */}

                <p className="text-danger my-3"> {error} </p>

                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Registration;
