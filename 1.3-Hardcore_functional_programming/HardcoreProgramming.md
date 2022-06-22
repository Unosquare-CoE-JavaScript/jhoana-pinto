## Functional Programming notes

###### What is a Function?
Every function is a single- valued collection of pairs, it should allways be predictable.

The input of a function is called *domain* and the output *range*.

the caracteristics of a function should be the following:
- *Total.* For every function there is a corresponding output.
- *Deterministic.* Always receive the same output for a given input.
- *No observable side-effects.* No observable effects besides computing a value.

###### Logging in composition

```js
const log = tag => x => console.log(tag, x) // manual currying

const log = (tag,x) => console.log(tag, x) // ramda currying
```

A **Task** is a *promise*.

Usefull APIs: Task, Either, List, Map,'immutable-ext'
```js
Promise.all([promise1, promise2, promise3])
```
equals to...
```js
List([promise1, promise2, promise3])
.traverse(Task.of , f => f())
.fork(console.log, X => console.log(x.toJS()))
```
This last line will execute every promise inside an array. The *traverse* method comes from List, which is included in 'immutable-ext'

Either.of() << Important! some sort of IF>ELSE>THEN, it receives a Left or Right as a value.

###### Functors

>A functor is any object that can be used with () in the manner of a function. This includes normal functions, pointers to functions, and class objects for which the () operator (function call operator) is overloaded, i.e., classes for which the function operator()() is defined.

*source: https://www.bogotobogo.com/functors.php*

###### Monads

> Monad is a design pattern used to describe computations as a series of steps. They are extensively used to manage side effects

*source: https://curiosity-driven.org/monads-in-javascript*

###### Natural transformation

Is a type transformation, changes the container without changing the value. The order doesn't matter. e.g:
```js
const eitherToTask = e =>
  e.fold(Task.rejected, Task.of)
```

