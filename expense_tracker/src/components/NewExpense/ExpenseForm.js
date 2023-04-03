import React, { useState } from "react";

import "./NewExpense.css";
import "./ExpenseForm.css";

const ExpenseForm = () => {
// Using multiple state
//   const [enteredTitle, setTitle] = useState("");
//   const [enteredAmount, setAmount] = useState("");
//   const [enteredDate, setDate] = useState("");

  // Using One State
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleHandlerChange = (event) => {
    // setTitle(event.target.value);

    // This could depend on a outdated or incorrect state snopshot
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });

    // This could give you the latest snapshot of state
    setUserInput((prevState) => {
        return { ...userInput, enteredTitle: event.target.value };
    });
  };

  const amountHandlerChange = (event) => {
    // setAmount(event.target.value);

    // This could depend on a outdated or incorrect state snopshot
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });

    // This could give you the latest snapshot of state
    setUserInput((prevState) => {
        return { ...userInput, enteredAmount: event.target.value };
    })
  };

  const dateHandlerChange = (event) => {
    // setDate(event.target.value);

    // This could depend on a outdated or incorrect state snopshot
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });

    // This could give you the latest snapshot of state
    setUserInput((prevState) => {
        return { ...userInput, enteredDate: event.target.value};
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandlerChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandlerChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandlerChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
