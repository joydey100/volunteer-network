import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SingleChoice from "../../components/SingleChoice/SingleChoice";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  //   my list
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    fetch(`https://frozen-citadel-61625.herokuapp.com/lists/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyList(data));
  }, [user]);

  return (
    <>
      <Container>
        <Row className="g-4 my-5">
          {myList.map((list) => (
            <SingleChoice key={list._id} {...list} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
