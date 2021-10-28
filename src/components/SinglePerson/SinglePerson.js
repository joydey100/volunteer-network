import React from "react";

const SinglePerson = ({ name, email, date, desc, title }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{title}</td>
    </tr>
  );
};

export default SinglePerson;
