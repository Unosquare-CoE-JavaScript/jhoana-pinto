import { useState } from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense"

function App() {

  const myList = [
    {id:1,date : new Date(2022,7,17), item : 'Dog food', price: 50},
    {id:2,date : new Date(2021,7,17), item : 'Cereal', price: 10},
    {id:3,date : new Date(2021,7,17), item : 'Shampoo', price: 20},
    {id:4,date : new Date(2022,7,17), item : 'Bread', price: 30},
  ];
  
  const [ expenses, setExpenses ] = useState(myList);
  
  function addExpenseHandler(expense){
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses list={expenses}/>
    </div>
  );
}

export default App;
