import React from "react";
import Mycss from "./Mycss.module.css";

const Button = (props) => (
  <button
    className={Mycss.Logbtn}
    href="/"
    style={{ backgroundColor: "#B34666" }}
    onClick={props.clicked}
    // onClick={clicked()}
  >
    {props.children}
  </button>
);
export default Button;
