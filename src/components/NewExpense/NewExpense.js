import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [adding, setAdding] = useState(false);

    function addExpenseClickHandler(){
        console.log("Add clicked");
        setAdding(true);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    const cancelAddHandler = () => {
        setAdding(false);
    }

    let innerContent =
        <div className="new-expense__actions">
            <button type="submit" onClick={addExpenseClickHandler}>Add Expense</button>
        </div>;
    
    if(adding){
        innerContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelAddHandler} />
    }

    return (
        <div className="new-expense">
            {innerContent}
        </div>
    );
};

export default NewExpense;