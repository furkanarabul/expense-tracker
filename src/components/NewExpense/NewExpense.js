import './NewExpense.css';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const saveExpeseDataHandler = (enteredExpenseData) => {
		if (
			isNaN(enteredExpenseData.date.getFullYear()) ||
			enteredExpenseData.amount === 0 ||
			enteredExpenseData.title.trim().length === 0
		) {
			alert('Please fill all the inputs properly !');
			return;
		}
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpenseData(expenseData);
		setIsEditing(false);
	};
	const startEditingHandler = () => {
		setIsEditing(true);
	};
	const stopEditingHandler = () => {
		setIsEditing(false);
	};
	return (
		<div className='new-expense'>
			{!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpeseDataHandler}
					onCancelEditing={stopEditingHandler}
				/>
			)}
		</div>
	);
};
export default NewExpense;
