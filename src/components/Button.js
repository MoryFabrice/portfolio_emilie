import React from "react";
// import "./Button.css";

const Button = ({ id, className, onClick }) => {
  return <button id={id} className={className} onClick={onClick}></button>;
};

export default Button;
