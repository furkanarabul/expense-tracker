import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';
const DUMMY_EXPENSES = [];
const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};
	return (
		<div>
			<div className='hero'>
				<h1>Welcome !</h1>
				<h3>Here you can track your expenses</h3>
			</div>
			<NewExpense onAddExpenseData={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
