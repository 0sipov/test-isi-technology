import React from "react";
import { button } from "./Button.module.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} type={type} className={button}>
      {text}
    </button>
  );
};

export default Button;
