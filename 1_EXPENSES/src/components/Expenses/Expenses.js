import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesChart from '../NewExpense/ExpensesChart'
import './Expenses.css';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses component!!")
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }
  const FilteredArray = props.items.filter(expense => {
    return (
      expense.date.getFullYear().toString() === filteredYear
    );
  })

  

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear}
        onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={FilteredArray} /> 
      <ExpensesList items={FilteredArray} />
           
      
      </Card>
      </div>
  );
}

export default Expenses;
