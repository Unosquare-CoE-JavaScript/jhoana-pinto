import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = props => {

    const [enteredTitle, setEnteredTitle] = useState('');

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    }

    const [enteredAmount, setEnteredAmount] = useState('');

    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState('');

    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            item: enteredTitle,
            price: +enteredAmount, 
            date: new Date(enteredDate),
        }
        //`$${parseFloat(enteredAmount).toFixed(2)}`
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className = "new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2020-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
        )
};

export {ExpenseForm};