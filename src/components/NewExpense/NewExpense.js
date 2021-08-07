import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [isFormOpen, setFormOpen] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormOpen(!isFormOpen);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <div className="new-expense">
      {!isFormOpen && (
        <button onClick={() => setFormOpen(!isFormOpen)}>
          Add New Expense
        </button>
      )}
      {isFormOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeForm}
        />
      )}
      <div className="link-to-Github">
        <a href="https://github.com/GvidasGVD/expenses-app" target="_blank" rel="noreferrer">
          You can find code of this app in Github
        </a>
      </div>
    </div>
  );
};

export default NewExpense;
