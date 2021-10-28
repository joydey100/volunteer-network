import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { googleSignIn, setLoading, setUser } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/";

  const handleGoogleLogIn = (e) => {
    googleSignIn()
      .then((result) => {
        setLoading(false);
        const user = result.user;
        setUser(user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <Card className="text-center p-5 shadow">
              <img
                src="https://i.imgur.com/x6jYGrB.png"
                alt="logo"
                className="w-50 d-block mx-auto mb-5"
              />
              <h4 className="mt-4"> Login/SignUp With</h4>
              <button
                className="py-2 mt-4 rounded-pill"
                onClick={handleGoogleLogIn}
              >
                {" "}
                <img
                  src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                  alt="google-logo"
                  className="google-logo"
                />{" "}
                <span className="ms-3">Continue With Google</span>
              </button>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
