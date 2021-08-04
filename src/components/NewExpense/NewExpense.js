import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import React, { useState } from "react";

const NewExpense = (props) => {
    const [isFormOpen, setFormOpen] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setFormOpen(!isFormOpen);
    }

    const closeForm = () => {
        setFormOpen(false)
    }

    return <div className="new-expense">
        {!isFormOpen && <button onClick={() => setFormOpen(!isFormOpen)}>Add New Expense</button>}
        {isFormOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeForm}/>}
    </div>
}

export default NewExpense;