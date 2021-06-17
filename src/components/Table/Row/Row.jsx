import React from "react";
import { cell, row } from "./Row.module.css";
const Row = ({ userName, firstName, secondName, email, type, onClick }) => {
  return (
    <tr onClick={onClick} className={row}>
      <td className={cell}>{userName}</td>
      <td className={cell}>{firstName}</td>
      <td className={cell}>{secondName}</td>
      <td className={cell}>{email}</td>
      <td className={cell}>{type}</td>
    </tr>
  );
};

export default Row;
