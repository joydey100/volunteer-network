import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import SinglePerson from "../SinglePerson/SinglePerson";

const AllLists = () => {
  const [list, setList] = useState([]);

  //   get full list
  useEffect(() => {
    fetch("https://frozen-citadel-61625.herokuapp.com/lists")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div>
      <Table striped bordered hover className="w-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email ID</th>
            <th>Registration Date</th>
            <th>Volunteer List</th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {list.map((person) => (
            <SinglePerson key={person._id} {...person} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllLists;
