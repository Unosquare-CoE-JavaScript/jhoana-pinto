# Chapter 3: Summary

- You can iterate a String by using the spread operator. e.g.

```js
var saludo = "Hola, como estas? me llamo itzel";
var chars = [...saludo];

console.log(chars)
// output --> Array(32) [ "H", "o", "l", "a", ",", " ", "c", "o", "m", "o", … ]
```
- **Closure.** when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope. e.g.

```js
function counter(step = 1) {    *// in this case step stays de same over time but..*
    var count = 0;  *// count will be updated on each iteration*
    return function increaseCount(){
        count = count + step;
        return count;
    };
}

```

## *This* keyword

It’s a tangible object whose properties are made available to a function while it executes. *This* gives you access to the properties (methos and values) of an specific scope. For example, the value of *this* in the borwser is by default *window*.

## Prototypes

A prototype is a characteristic of an object, and specifically resolution of a property access.







