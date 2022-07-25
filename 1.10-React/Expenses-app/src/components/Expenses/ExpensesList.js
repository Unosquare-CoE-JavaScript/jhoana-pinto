import './ExpensesList.css';
import { ExpenseItem } from "./ExpenseItem";

function ExpensesList( props ){

   if (props.list.length === 0){
    return <h2 className='expenses-list__fallback'>No expenses Found.</h2>;
   }

   return <ul className='expenses-list'>
    {props.list.map(item =><ExpenseItem key={item.id} title={item.item} date={item.date} price={`$${parseFloat(item.price).toFixed(2)}`} />)}
   </ul>;
}

export { ExpensesList }