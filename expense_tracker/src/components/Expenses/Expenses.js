import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpensesFilter";

function Expenses(props) {

  const [filterYear, setFilterYear] = useState('2023');
  
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  // Outputting Conditional Contents
  const filteredExpenses = props.items.filter((expense) => {
    const date = new Date(expense.date);
    return date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No Expenses Found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  // Outputting Conditional Contents

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* Outputting Conditional Content */}
      {expensesContent}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
