# 💰 Expense Tracker Project: Step-by-Step Guide

This guide walks you through building an **Expense Tracker** app using **Web Components** in vanilla JavaScript. We'll start by creating a reusable `expense-card` UI component.

---

## 📘 Project Definition

The **Expense Tracker** allows users to record, display, and manage personal expenses. Features will include:

- Displaying each expense with title, category, date, and amount.
- Ability to edit or delete an expense.
- Searching through expenses (future step).

---

## 🗂 Folder Structure

```
project/
│
├── index.html
├── css/
│   └── main.css
├── js/
│   ├── main.js
│   └── components/
│       └── expense-card.js
```

---

## 🔌 Step 1: Connect Files in `index.html`

Your HTML should load the main JavaScript file, which in turn will import the `expense-card` component.

### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Expense Tracker</title>
  <link rel="stylesheet" href="css/main.css" />
</head>
<body>
  <h1>My Expenses</h1>

  <expense-card
    title="Coffee"
    category="Food"
    date="2025-05-10"
    amount="4.50"
  ></expense-card>

  <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

## 📥 Step 2: Import `expense-card.js` in `main.js`

### 📄 `js/main.js`

```js
import './components/expense-card.js';
```

This ensures the component is registered before use.

---

## 🧱 Step 3: Create the `expense-card.js` Component

This file defines and registers a custom element `<expense-card>` using Web Component APIs.

### 📄 `js/components/expense-card.js`

```js
class ExpenseCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
    .card {
      background: #fff;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      flex:1 1 300px;
    }
    .header {
      display: flex;
      justify-content: space-between;
    }
    .title {
      font-weight: bold;
      font-size: 1.1rem;
    }
    .amount {
      color: green;
      font-weight: bold;
    }
    .meta {
      font-size: 0.9rem;
      color: #666;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      margin-top: 10px;
    }
    .actions button {
      padding: 5px 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
    }
    .edit-btn {
      background-color: #3b82f6;
      color: white;
    }
    .delete-btn {
      background-color: #ef4444;
      color: white;
    }`;
   

    //creating innerHtml of shadowroot
    this.shadowRoot.innerHTML = `
      <div class="card" id="">
        <div class="header">
          <div>
            <div class="title"></div>
            <div class="meta category"></div>
          </div>
          <div class="amount"></div>
        </div>
        <div class="meta date"></div>
        <div class="actions">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    `;
    
     //attaching style to our shadowroot
    this.shadowRoot.appendChild(style);
  }


}


```

---
## Connected Callback
Adding Ui component attributes to the innerHtml of componenet when it get connected.

```js
  connectedCallback() {
    this.shadowRoot.querySelector(".title").textContent =
      this.getAttribute("title") || "No title";
    this.shadowRoot.querySelector(".category").textContent =
      "Category: " + (this.getAttribute("category") || "");
    this.shadowRoot.querySelector(".date").textContent =
      this.getAttribute("date") || "";
    this.shadowRoot.querySelector(".amount").textContent =
      "$" + parseFloat(this.getAttribute("amount") || 0).toFixed(2);
    this.shadowRoot.querySelector(".card").setAttribute("id", Number(this.getAttribute("id")) || new Date().getTime());
  }
```
## Finally: Difining new Element
```js
customElements.define("expense-card", ExpenseCard);
```

## ✅ Usage Summary

- Define the element via `customElements.define`.
- Use `connectedCallback` to render when added to the DOM.
- Use `attachShadow({ mode: 'open' })` for style encapsulation.
- Provide UI logic and styling inside the component.

---

## 🧪 Next Step

- Create a container for multiple cards.
- Add input form to add/edit expenses.
- Search and filter features.
- Connecting APIs

Ready to grow your component step-by-step!
