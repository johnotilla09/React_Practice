import React, { useState } from "react";

import "./NewExpense.css";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Using multiple state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Using One State
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // This could depend on a outdated or incorrect state snopshot
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });

    // This could give you the latest snapshot of state
    // setUserInput((prevState) => {
    //     return { ...userInput, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // This could depend on a outdated or incorrect state snopshot
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });

    // This could give you the latest snapshot of state
    // setUserInput((prevState) => {
    //     return { ...userInput, enteredAmount: event.target.value };
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // This could depend on a outdated or incorrect state snopshot
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });

    // This could give you the latest snapshot of state
    // setUserInput((prevState) => {
    //     return { ...userInput, enteredDate: event.target.value};
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
