# Chapter 7: Using Closures

- Closures  allows us to preserve certain values in the memory insted of them being garbage collected on a new cycle.

- Even though closure is based on lexical scope, which is handled at compile time, closure is observed as a runtime characteristic of function instances.

- An arrow function also creates its own scope.

- Suposing we're using a closure that needs to acces an outer var, that closure won't be attached to the value that the var had when the closure was created because the code of the closure is closed over the variable, not its value, meaning that if the value or the variable is modified, it'll affect the outcome of the closure.

###### Defining closure

>Closure is observed when a function uses variable(s) from outer scope(s) even while running in a scope where those variable(s) wouldn’t be accessible.

The key parts of this definition are:
* Must be a function involved
* Must reference at least one variable from an outer scope
* Must be invoked in a different branch of the scope chain from the variable(s)

It’s a good habit to be careful and explicitly make sure we don’t keep any significant amount of device memory tied up any longer than necessary.

###### Summarizing...

Closures allows our program to remember variables from its outer scope, this way it optimizes its process, by not having to re-declare that variable everytime we need it. I also helps our code look cleaner and being easier to read, plus it helps us getting rid of certain bugs.
