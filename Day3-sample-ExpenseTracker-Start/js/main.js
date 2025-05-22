import './components/expense-card.js'
import './components/expenses-container.js'
import theExpenses from './expense-data.js';
import expenses from './expense.js';

/*
const theExpenses = [
  {id:1, title: "Book", category: "Education", date: "2025-05-11", amount: 15.99 },
  { id:2, title: "Pizza", category: "Food", date: "2025-05-11", amount: 22.5 }
];

expenseContainer.setAttribute('expenses', JSON.stringify(theExpenses));

let oldExpnses=expenseContainer.getAttribute('expenses');
oldExpnses=JSON.parse(oldExpnses);
const newExpnses=oldExpnses.map(item=>{
    item.amount*=1.2;
    return item;
})
expenseContainer.setAttribute('expenses', JSON.stringify(newExpnses));
*/
const expenseContainer = document.querySelector('expense-container');

expenses.subscribe("update", (data) => {
  expenseContainer.setAttribute("expenses", JSON.stringify(data));
})

expenses.addExpense(...theExpenses);

//expenses.filterExpense("book");


// Search option
document.getElementById("search-box").addEventListener('input', (e) => {
  const input = e.target.value;
  if (input.length > 0) {
    expenses.filterExpense(input);
  } else {
    expenses.clear();
    expenses.addExpense(...theExpenses);
  }
})

document.querySelector(".container").addEventListener("expense-delete", (e) => {
  if (confirm(`Are you sure to delete expense (${e.detail.id})?`)) {
    expenses.removeExpense(e.detail.id);
  } 
})