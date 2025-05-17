import './components/expense-card.js';
import './components/expense-container.js';

// Import data array from other js file
import theExpenses from './expense-data.js';

/*
const theExpenses = [
  {id:1, title: "Book", category: "Education", date: "2025-05-11", amount: 15.99 },
  { id:2, title: "Pizza", category: "Food", date: "2025-05-11", amount: 22.5 },
  { id:3, title: "Burger", category: "Food", date: "2025-05-11", amount: 21.5 }
];
*/

const expenseContainer=document.querySelector('expense-container');

//Setting expenses
expenseContainer.setAttribute('expenses', JSON.stringify(theExpenses));

//Updating Expenses
let oldExpnses=expenseContainer.getAttribute('expenses');
oldExpnses=JSON.parse(oldExpnses);

const newExpnses=oldExpnses.map(item=>{
    item.amount*=1.1;
    return item;
})

expenseContainer.setAttribute('expenses', JSON.stringify(newExpnses));
