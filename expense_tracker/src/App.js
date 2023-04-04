import React from "react";

import'./index.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = (props) => {

  const expenses = [
    {
      id : 'e1',
      title : 'Toilet Paper',
      amount : '250.000',
      date : new Date()
    },
    {
      id : 'e2',
      title : 'Water',
      amount : '500.00',
      date : new Date()
    },
    {
      id : 'e3',
      title : 'Current',
      amount : '1,000.000',
      date : new Date()
    },
    {
      id : 'e4',
      title : 'Transportation',
      amount : '150.000',
      date : new Date()
    }
  ];

  const addExpenseHnadler = (expense) => {
    console.log(expense);
  };

  // Using React
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement('h2', {}, 'Lets get started'),
  //   React.createElement(Expenses, {items: expenses})
  // );

  // Use JSX syntax
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHnadler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
