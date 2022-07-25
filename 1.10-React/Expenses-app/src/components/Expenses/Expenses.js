import { ExpensesFilter } from "../ExpensesFilter/ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";
import {Card} from'../UI/Card'
import { useState } from 'react';
import'./Expenses.css'

function Expenses(props){
    
   const [enteredFilter, setEnteredFilter] = useState('2022');
   
   function filterHandler(selectedYear){
       setEnteredFilter(selectedYear);
   }

   const list = props.list

   const [newList, setNewList] = useState(list);

   function filteredListHandler(filteredList){
    setNewList(filteredList)
   }
   
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter list={{ list, filteredListHandler}} selectedYear={enteredFilter} onFilter={filterHandler}/>
                <ExpensesChart expenses={newList}/>
                <ExpensesList list={newList}/>
            </Card>
        </div>
    );
}

export {Expenses}