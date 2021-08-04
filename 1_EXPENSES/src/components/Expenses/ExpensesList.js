import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {

    let ExpensesContent = <p>No Expenses Found!!</p>

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Expenses No Found.</h2>
    }
  
    return (
        <ul className="expenses-list">
            {
                props.items.map(expenses => {
                    return (
                      <ExpenseItem
                        key={expenses.id}
                        title={expenses.title}
                        date={expenses.date}
                        amount={expenses.amount}
                      />
                    )
                  })
            }
        </ul>
    );
}

export default ExpensesList;