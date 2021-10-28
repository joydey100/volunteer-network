import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar bg="light" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="w-25 ">
            <img
              src="https://i.imgur.com/x6jYGrB.png"
              alt="logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/lists">
                Event List
              </Nav.Link>
              {user?.email && (
                <Nav.Link as={NavLink} to="/dashboard">
                  Dashboard
                </Nav.Link>
              )}
              {user?.email ? (
                <Button onClick={logOut} className="ms-lg-3 ms-0">
                  Log Out
                </Button>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
