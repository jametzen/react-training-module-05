import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props){

    // Filter from filter up to Expenses (this) component.
    // Store filter data in state here.

    const [filterData, setFilterData] = useState(
        {year: 2019}
    );

    const onFilterChange = (changedData) => {
        console.log(changedData);
        // Doesn't depend on previous state, directly.
        setFilterData(changedData);
    };

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() >= parseInt(filterData.year));

    return(
        <Card className="expenses">
            <ExpensesFilter onFilterChange={onFilterChange} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    
    );
}

export default Expenses;