
# Step-by-Step Guide: Creating `expense-container` UI Component

## 1. Objective

The goal of this component is to display a list of expense items using custom `expense-card` components. The `expense-container` acts as a wrapper that takes an array of expense data (via an `expenses` attribute) and dynamically renders a list of cards.
The expense arrtibute is gonna accept a json string containing an array of expense objects.

---
## Composition
In software design, composition means building complex functionality by combining simpler components or objects
- In this case:

  - expense-container is a custom element that uses other custom elements (expense-card) to build a larger UI.

  - Instead of handling the display of expense details itself, it delegates that responsibility to reusable expense-card components.

## 2. Creating the UI Class and Essential Elements

We start by extending `HTMLElement` to define a new custom element:

```js
class ExpenseContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
```

- `attachShadow({ mode: "open" })` creates a shadow DOM to encapsulate styles and DOM structure.
- We then create a `<div>` element to act as a container for expense cards:

```js
    this.container = document.createElement("div");
    this.container.classList.add('expense-container');
    this.shadowRoot.appendChild(this.container);
```

- Next, we define and attach styles for the container:

```js
    const style = document.createElement("style");
    style.textContent = `
      .expense-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 20px;
  box-sizing: border-box;
      }`;
    this.shadowRoot.appendChild(style);
  }
```

---

## 3. Rendering Expense Cards

The `renderExpenses()` method is responsible for taking the `expenses` attribute, parsing it as JSON, and rendering each item using an `expense-card`:

```js
  renderExpenses(){
    this.container.innerHTML='';
    const expensesAttr = this.getAttribute("expenses");
    let expenses = [];

    try {
      expenses = JSON.parse(expensesAttr);
    } catch (e) {
      console.warn("Invalid expenses attribute:", e);
    }

    if (Array.isArray(expenses)) {
      expenses.forEach((exp) => {
        const card = document.createElement("expense-card");
        card.setAttribute("title", exp.title);
        card.setAttribute("category", exp.category);
        card.setAttribute("date", exp.date);
        card.setAttribute("amount", exp.amount);
        card.setAttribute("id", exp.id);
        this.container.appendChild(card);
      });
    }
  }
```

---

## 4. Lifecycle Hooks and Observed Attributes

### `connectedCallback`

This lifecycle method is called when the component is added to the DOM. Here, we use it to trigger the initial rendering:

```js
  connectedCallback() {
    this.renderExpenses();
  }
```

### `observedAttributes`

This static getter defines which attributes should trigger `attributeChangedCallback` when changed:

```js
  static get observedAttributes() {
    return ['expenses'];
  }
```

### `attributeChangedCallback`

This method responds to changes in observed attributes and re-renders the component if necessary:

```js
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'expenses' && oldValue !== newValue) {
      this.renderExpenses();
    }
  }
```

---
## import this new component in `main.js`
```js
import './components/expenses-container.js'
```
# Using this component in Html


```html
<expense-container id="container"
  expenses='[{"id":1,"title":"Rent","category":"Housing","date":"2025-05-01","amount":1200},
             {"id":2,"title":"Coffee","category":"Food","date":"2025-05-10","amount":4.5}]'>
</expense-container>
```

## Updating this component in `main.js`
```js
import './components/expense-card.js'
import './components/expenses-container.js'

const expenseContainer=document.querySelector('expense-container');

const theExpenses = [
  {id:1, title: "Book", category: "Education", date: "2025-05-11", amount: 15.99 },
  { id:2, title: "Pizza", category: "Food", date: "2025-05-11", amount: 22.5 }
];
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

```

## Summary

- We built a custom `expense-container` that receives JSON data via an attribute.
- It uses lifecycle hooks to react to DOM changes and attribute updates.
- It renders reusable `expense-card` components inside a styled shadow DOM container.
