# Web Components: Building UI with Custom Elements

This guide introduces **Web Components**—a powerful way to create encapsulated, reusable UI components in vanilla JavaScript. We’ll explore key lifecycle methods step by step with simple examples.

---

## 📦 1. What is a Web Component?

A **Web Component** is a custom HTML element with its own behavior and style, defined using the `HTMLElement` class.

### Example

```html
<hello-world></hello-world>
```

```js
class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<p>Hello, Web Components!</p>";
  }
}
customElements.define('hello-world', HelloWorld);
```

---

## ⚡ 2. Lifecycle: `connectedCallback()`

The `connectedCallback()` method is called when your custom element is added to the DOM. You use it to render or initialize logic.

### Example

```js
class SimpleGreeting extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>Hello from SimpleGreeting!</p>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);
```

---

## 👂 3. Observing Attributes: `observedAttributes` and `attributeChangedCallback()`

If you want your component to react to changes in attributes, you need to:

1. Define which attributes to observe via `static get observedAttributes()`
2. Handle those changes using `attributeChangedCallback()`

### Example

```html
<dynamic-text text="Initial text"></dynamic-text>
```

```js
class DynamicText extends HTMLElement {
  static get observedAttributes() {
    return ['text'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'text') {
      this.render();
    }
  }

  render() {
    const value = this.getAttribute('text') || 'Default text';
    this.innerHTML = `<p>${value}</p>`;
  }
}
customElements.define('dynamic-text', DynamicText);
```

### 🔄 Changing Attribute with JavaScript

```js
const el = document.querySelector('dynamic-text');
el.setAttribute('text', 'Updated via JS!');
```

---

## ✅ 4. Encapsulation with Shadow DOM

The **Shadow DOM** is a key part of Web Components that allows you to encapsulate the internal structure and styles of your component, preventing them from leaking out or being affected by global CSS.

You create a shadow root using:

```js
this.attachShadow({ mode: 'open' });
```

---

### 📦 What are the benefits of using `attachShadow()`?

| Benefit                           | Description                                                                 |
|-----------------------------------|-----------------------------------------------------------------------------|
| **Style Encapsulation**           | Styles defined in the shadow DOM don’t leak out and aren't affected by global styles. |
| **DOM Encapsulation**             | The component’s internal structure is hidden from the main document’s DOM. |
| **Reusable and Predictable UI**   | Components behave consistently wherever used — like native HTML elements.  |
| **Scoped CSS**                    | You can safely use generic class names like `.title` without collisions.   |

---

### 🔒 What is the `mode` option?

When creating a shadow root, you can choose the access mode:

- `mode: 'open'` – The shadow DOM is accessible via JavaScript using `.shadowRoot`.
- `mode: 'closed'` – The shadow DOM is hidden and cannot be accessed from outside the component.

#### Example

```js
class ShadowGreeting extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // or 'closed'
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style> p { color: blue; } </style>
      <p>Hello with Shadow DOM</p>
    `;
  }
}
customElements.define('shadow-greeting', ShadowGreeting);
```

#### Accessing the shadow root (only works with `open`):

```js
document.querySelector('shadow-greeting').shadowRoot // ✅ works
```

If `mode: 'closed'` is used, `shadowRoot` will return `null`.

---

## 🎁 Summary

| Feature                     | Purpose                                           |
|----------------------------|---------------------------------------------------|
| `connectedCallback()`       | Called when component is added to DOM            |
| `observedAttributes()`      | Defines which attributes to watch                |
| `attributeChangedCallback()`| Handles changes to observed attributes           |
| `attachShadow()`            | Enables encapsulated structure and scoped style  |

---

## 💡 Next Steps

- Pass complex data using `JSON.stringify()` in attributes.
- Create complete UI components like `<expense-card>` and `<expense-container>`.
- Load external templates or stylesheets dynamically.
- Integrate with frameworks (if needed), or build a design system using vanilla components.
