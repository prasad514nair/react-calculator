import React from "react";
import "./KeyPadBtn.css";

export default function KeyPadBtn(props) {
  const isOperator = val => {
    return !isNaN(val) || val === "." || val === "C" || val === "=";
  };
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
