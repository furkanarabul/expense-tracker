import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.scss';
import ExpensesChart from './ExpensesChart';
import ExpenseFilter from './ExpenseFilter';
import React, { useState } from 'react';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className='expenses'>
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};
export default Expenses;
