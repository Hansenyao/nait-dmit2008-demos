import './components/expense-card.js'
import './components/expenses-container.js'

import theExpenses from './expense-data.js';
import expenses from './expenses.js';

const expenseContainer=document.querySelector('expense-container');

expenses.subscribe("update", (expenses) => {
    expenseContainer.setAttribute('expenses', JSON.stringify(expenses));
});

expenses.clear();
expenses.addExpense(...theExpenses);

document.getElementById("searchbox").addEventListener("input", (e) => {
    const input = e.target.value;
    if(input.length > 0) {
        expenses.filterExpense(input);
    } else {
        expenses.clear();
        expenses.addExpense(...theExpenses);
    }
});

document.getElementById("expense-form-add").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const amount = document.getElementById("amount").value;
    if(title && category && date && amount) {
        expenses.addExpense({title, category, date, amount});
        e.target.reset();
    }
});