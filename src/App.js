import React, { useState, useEffect } from "react";
import "./App.css";
import KeyPadBtn from "./components/keyPadBtn/KeyPadBtn";
import Display from "./components/display/Display";

//App Component has two child component Display and KeyPadBtn
//Functional component using hooks
function App() {
  const [input, setInput] = useState(""); //store current display value
  const [prevInput, setPrevInput] = useState(""); //store previous input value
  const [currentVal, setCurrentVal] = useState(""); //store current input value
  const [operator, setOperator] = useState(""); //store operator value

  const addToInput = val => {
    setInput(prev => prev + val);
  };

  useEffect(() => {
    setCurrentVal(input);
    console.log("useEffect:", input);
  }, [input]);

  //Handler Functions to handle different Key presses on Calculator
  const addDecimal = val => {
    if (input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
      setInput(input + val);
    }
  };

  const addZeroToInput = val => {
    if (input !== "") {
      setInput(input + val);
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const add = () => {
    setPrevInput(input);
    setInput("");
    setOperator("plus");
  };

  const subtract = () => {
    setPrevInput(input);
    setInput("");
    setOperator("subtract");
  };

  const multiply = () => {
    setPrevInput(input);
    setInput("");
    setOperator("multiply");
  };

  const divide = () => {
    setPrevInput(input);
    setInput("");
    setOperator("divide");
  };
  //Handler Functions to handle the calculations
  const evaluate = () => {
    if (operator === "plus") {
      setInput(parseInt(prevInput) + parseInt(currentVal));
    } else if (operator === "subtract") {
      setInput(parseInt(prevInput) - parseInt(currentVal));
    } else if (operator === "multiply") {
      setInput(parseInt(prevInput) * parseInt(currentVal));
    } else if (operator === "divide") {
      setInput(parseInt(prevInput) / parseInt(currentVal));
    }
  };
  return (
    <div className="App">
      <div className="calc-wrapper">
        <h3>Calculator</h3>
        <div className="row">
          <Display>{input}</Display>
        </div>
        <div className="row">
          <KeyPadBtn handleClick={evaluate}>=</KeyPadBtn>
        </div>
        <div className="row">
          <KeyPadBtn handleClick={addToInput}>7</KeyPadBtn>
          <KeyPadBtn handleClick={addToInput}>8</KeyPadBtn>
          <KeyPadBtn handleClick={addToInput}>9</KeyPadBtn>
          <KeyPadBtn handleClick={divide}>/</KeyPadBtn>
        </div>
        <div className="row">
          <KeyPadBtn handleClick={addToInput}>4</KeyPadBtn>
          <KeyPadBtn handleClick={addToInput}>5</KeyPadBtn>
          <KeyPadBtn handleClick={addToInput}>6</KeyPadBtn>
          <KeyPadBtn handleClick={multiply}>*</KeyPadBtn>
        </div>
        <div className="row">
          <KeyPadBtn handleClick={addToInput}>1</KeyPadBtn>
          <KeyPadBtn handleClick={addToInput}>2</KeyPadBtn>
          <KeyPadBtn handleClick={addToInput}>3</KeyPadBtn>
          <KeyPadBtn handleClick={add}>+</KeyPadBtn>
        </div>
        <div className="row">
          <KeyPadBtn handleClick={addDecimal}>.</KeyPadBtn>
          <KeyPadBtn handleClick={addZeroToInput}>0</KeyPadBtn>
          <KeyPadBtn handleClick={clearInput}>C</KeyPadBtn>
          <KeyPadBtn handleClick={subtract}>-</KeyPadBtn>
        </div>
      </div>
    </div>
  );
}

export default App;
