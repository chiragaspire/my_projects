import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const [enteredTitle, setenteredTitle] = useState("");
    const [enteredAmount, setenteredAmount] = useState("");
    const [enteredDate, setEntredDate] = useState("");
    const [num, setNum] = useState(0);
    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
        console.log(enteredTitle);
    }
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
        console.log(enteredAmount);
    }
    const dateChangeHandler = (event) => {
        setEntredDate(event.target.value);
        console.log(enteredDate);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date:new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expenseData );

        setenteredTitle('');
        setEntredDate('');
        setenteredAmount('');
        
    }
    
    
    
    
    return (
        <div>
            
            
               
                <form onSubmit={handleSubmit}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <lable>Title</lable>
                            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <lable>Amount</lable>
                            <input type="text" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <lable>Date</lable>
                            <input type="date" min="2019-01-01" max="2021-12-31" value={enteredDate} onChange={dateChangeHandler} />
                        </div>
                    </div>
                    
                    <div className="new-expense__actions" >
                    <button onClick={props.onCancel} >Cancle</button>
                        <button type="submit" >Add Expense</button>
                    </div>
                </form>
            

        </div>
       
    )
}

export default ExpenseForm;