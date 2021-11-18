import ExpenseItem from './ExpenseItem';
import './ExpensesList.scss';
const ExpensesList = (props) => {
	props.items.forEach((element) => {
		console.log(element.amount);
	});
	const totalExpenses = props.items
		.map((item) => item.amount)
		.reduce((prev, curr) => prev + curr, 0);

	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>No Expenses Found</h2>;
	}
	return (
		<div>
			<ul className='expenses-list'>
				{props.items.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</ul>
			<div className='expenses-list__total'>
				<div className='expenses-list__total--text'>TOTAL</div>
				<div className='expenses-list__total--amount'>$ {totalExpenses}</div>
			</div>
		</div>
	);
};
export default ExpensesList;
