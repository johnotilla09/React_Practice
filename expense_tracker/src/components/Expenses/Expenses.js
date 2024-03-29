import React, { useState } from "react";

import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpesnesChart from "./ExpensesChart";
import './Expenses.css';


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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpesnesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
