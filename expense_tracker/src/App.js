import Expenses from "./components/Expenses";

function App() {

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

  return <Expenses items={expenses} />;
}

export default App;
