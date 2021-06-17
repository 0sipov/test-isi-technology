import React from "react";
import { useSelector } from "react-redux";
import Row from "../Row/Row";
import { tbody } from "./Tbody.module.css";

const Table = ({ onClickRow }) => {
  const users = useSelector((state) => state.users);
  return (
    <tbody className={tbody}>
      {users.map(({ userName, firstName, lastName, email, type, id }) => {
        return (
          <Row
            key={id}
            id={id}
            userName={userName}
            firstName={firstName}
            secondName={lastName}
            email={email}
            type={type}
            onClick={() => onClickRow(id)}
          />
        );
      })}
    </tbody>
  );
};

export default Table;
