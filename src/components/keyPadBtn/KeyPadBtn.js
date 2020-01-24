import React from "./node_modules/react";
import "./KeyPadBtn.css";

export default function KeyPadBtn(props) {
  //function to assign css class based on a operator key or a number key
  const isOperator = val => {
    return !isNaN(val) || val === "." || val === "C" || val === "=";
  };
  //function to assign css class to evaluator (=) key
  const isEvaluator = val => {
    return val === "=";
  };

  return (
    <div
      className={`button ${(isOperator(props.children) ? "" : "operator") ||
        (isEvaluator(props.children) ? "evaluator" : "")}`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}
