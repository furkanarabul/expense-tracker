import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	//const [userInput, setUserInput] = useState({
	//	enteredTitle: '',
	//	enteredAmounts: '',
	//	enteredDate: '',
	// });

	const titleChangeHandler = (event) => {
		// 1ST OPTION
		//console.log(event.target.value);
		setEnteredTitle(event.target.value);
		// 2ND OPTION ( WRONG )
		//setUserInput({
		//	...userInput,
		//	enteredTitle: event.target.value,
		// });
		//setUserInput((prevstate) => {
		//	return { ...prevstate, enteredTitle: event.target.value };
		// });
	};
	const amountChangeHandler = (event) => {
		//console.log(event.target.value);
		setEnteredAmount(event.target.value);
		//setUserInput({
		//	...userInput,
		//	enteredAmount: event.target.value,
		// });
		//setUserInput((prevstate) => {
		//	return { ...prevstate, enteredAmount: event.target.value };
		//});
	};
	const dateChangeHandler = (event) => {
		//console.log(event.target.value);
		setEnteredDate(event.target.value);
		//setUserInput({
		//	...userInput,
		//	enteredDate: event.target.value,
		// });
		//setUserInput((prevstate) => {
		//	return { ...prevstate, enteredDate: event.target.value };
		//});
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expenses__actions'>
				<button
					class='new-expenses__actions--cancel'
					type='button'
					onClick={props.onCancelEditing}
				>
					Cancel
				</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};
export default ExpenseForm;
