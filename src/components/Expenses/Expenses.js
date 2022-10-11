import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

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

    return(

            <Card className="expenses">
                <ExpensesFilter onFilterChange={onFilterChange} />
                
                {
                    props.expenses.filter(expense => expense.date.getFullYear() >= parseInt(filterData.year))
                    .map(expense => {
                        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
                    })
                }
            </Card>
    
    );
}

export default Expenses;