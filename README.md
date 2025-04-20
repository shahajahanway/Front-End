# Front-End

# 🧠 JavaScript OOPs Notes - Constructor Function vs Class

This repo contains a simple and beginner-friendly explanation of how Object-Oriented Programming (OOPs) works in JavaScript, especially focusing on the difference between **constructor functions** and **classes**.

## 🚀 What You'll Learn

- What happens when you use `new` with a function.
- How `this` keyword behaves in constructor functions.
- The old-school way to create objects in JavaScript.
- The modern `class` syntax introduced in ES6.
- A fun and easy-to-understand example using "Ghar" and "Toffey".

---

## 📜 Old Method – Constructor Function

```js
function Ghar() {
    this.shahar = "Delhi";
    this.kamra = 3;
    this.bathroom = 2;
    this.kitchen = 1;
}

let ghar1 = new Ghar();
```

🧠 Explanation:

Using new creates a blank object.

Inside the function, this refers to that new object.

This was used before the class syntax was introduced.

✅ Modern Way – Using Classes

class Toffey {
    constructor(flavor, color, taste, shape) {
        this.flavor = flavor;
        this.color = color;
        this.taste = taste;
        this.shape = shape;
    }
}

let chocolate = new Toffey("chocolate", "brown", "sweet", "round");
let vanilla = new Toffey("vanilla", "pink", "sweet", "round");
let mango = new Toffey("mango", "green", "sweet", "square");


🎯 Explanation:

Cleaner and more structured.

Same concept as constructor functions, but modern syntax.

Easier to read and maintain.

💡 Pro Tips
Always imagine a blank object being created when you use new.

Wherever you see this inside a constructor, remember: it's pointing to that new object.

class is just syntactic sugar over constructor functions.


