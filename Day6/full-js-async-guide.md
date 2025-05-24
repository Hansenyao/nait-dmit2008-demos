
# 🧠 JavaScript Event Loop, Concurrency, and Asynchronous Programming

---

## 1. 🔄 JavaScript Event Loop and Concurrency

JavaScript is single-threaded, meaning it can run **one piece of code at a time** on the main thread. However, it can manage asynchronous tasks through the **event loop**.

### 🧱 Components

- **Call Stack**: Executes synchronous code line-by-line.
- **Web APIs**: Handles async operations like `setTimeout`, `fetch`, etc.
- **Callback Queue**: Stores functions to execute after async operations finish.
- **Event Loop**: Constantly checks if the call stack is empty and moves tasks from the queue.

### 🕹️ Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

**Output:**
```
Start
End
Timeout
```

### ✅ Synchronous vs Asynchronous

| Feature              | Synchronous                             | Asynchronous                          |
|----------------------|------------------------------------------|----------------------------------------|
| Execution            | Top to bottom, blocks execution         | Runs in background, non-blocking       |
| Waits for completion | Yes                                     | No                                     |
| Use case             | Math ops, DOM updates                   | Network calls, timers, file I/O        |

---

## 2. ✅ Promises and `.then()`, `.catch()`, `.finally()`

A **Promise** represents a value that may be available now, in the future, or never.

### 🔄 Promise States

- **Pending**: Initial state
- **Fulfilled**: Resolved successfully
- **Rejected**: Failed with an error

### 🔗 Basic Usage

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise
  .then(result => console.log(result)) // "Done!"
  .catch(error => console.error(error))
  .finally(() => console.log("Always runs"));
```

- `.then()` handles successful results
- `.catch()` handles errors
- `.finally()` runs regardless of the outcome

### 🔗 Chaining Promises

```js
fetch("/api/user")
  .then(res => res.json())
  .then(user => fetch(`/api/posts?userId=${user.id}`))
  .then(res => res.json())
  .then(posts => console.log(posts))
  .catch(err => console.error("Error:", err));
```

---

## 3. 🧵 Asynchronous Programming with `async/await`

`async/await` is syntactic sugar for Promises. It allows writing asynchronous code in a synchronous style.

### ✨ Basic Usage

```js
async function fetchData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}
```

- `async` functions always return a promise.
- `await` pauses execution until the promise resolves.

---

## 4. ❗ Error Handling in Async Programming

### ✅ Try/Catch with `async/await`

```js
async function getUserData() {
  try {
    const res = await fetch("/api/user");
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}
```

> Use `try/catch` blocks around `await` for better error control.

### ⚠️ Common Mistake

```js
await fetch("/broken-url"); // without try/catch = unhandled error
```

Always wrap in `try/catch` or use `.catch()` on the returned promise.

---

## 5. 🚀 Advanced Promise Combinators

### 🔹 `Promise.all([...])`

Waits for **all promises** to resolve. Fails fast if one rejects.

```js
Promise.all([fetch("/api/1"), fetch("/api/2")])
  .then(responses => console.log("All done", responses))
  .catch(error => console.error("One failed", error));
```

### 🔹 `Promise.race([...])`

Resolves or rejects as soon as **any promise** settles.

```js
Promise.race([slowPromise, fastPromise])
  .then(result => console.log("First finished:", result))
  .catch(error => console.error("First failed:", error));
```

### 🔹 `Promise.any([...])`

Returns the first **fulfilled** promise. Ignores rejections unless all fail.

```js
Promise.any([
  Promise.reject("fail"),
  Promise.reject("fail"),
  Promise.resolve("success")
])
.then(value => console.log("Resolved:", value))
.catch(error => console.error("All failed"));
```
## 🧪 Code Playground

Try this in browser dev tools or JS playground:

```js
async function test() {
  const p1 = Promise.resolve("Fast");
  const p2 = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));

  const first = await Promise.race([p1, p2]);
  console.log("Race result:", first);

  const all = await Promise.all([p1, p2]);
  console.log("All result:", all);
}

test();
```

---
---


## 🧠 Summary Table

| Concept               | Description                                       |
|-----------------------|---------------------------------------------------|
| Event Loop            | Handles async execution while JS is single-threaded |
| Promise               | Handles eventual completion of async operations  |
| `.then()`             | Attach handler for success                       |
| `.catch()`            | Attach handler for errors                        |
| `.finally()`          | Run code no matter the outcome                   |
| `async/await`         | Cleaner syntax for working with promises         |
| `try/catch`           | Error handling for async code                    |
| `Promise.all()`       | Wait for all or fail fast                        |
| `Promise.race()`      | First one to settle wins                         |
| `Promise.any()`       | First successful one wins                        |

---

✅ Use Promises and `async/await` wisely to write readable, efficient, and non-blocking JavaScript code.
