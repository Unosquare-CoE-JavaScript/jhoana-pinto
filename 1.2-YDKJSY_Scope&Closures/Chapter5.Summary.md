# Chapter 5: The (Not So) Secret Lifecycle of Variables

*Hoisting* only works for variables declared with *var*. 

*Function hoisting* only works with formal function declarations.

With hoistng the variable will be declared but not initialized, so if you try to access before assigning a value to it, it'll return as undefined.

###### Loops

What happens to a variable declared inside a loop? Nothing, it won't throw any errors because it's not actually redeclaring all the time, it's more like every time a new iteration in the loop starts everything is reseted.

>All the rules of scope (including “re-declaration” of letcreated variables) are applied per scope instance. In other words, each time a scope is entered during execution, everything resets.
>
>Each loop iteration is its own new scope instance, and within each scope instance, value is only being declared once.

###### Temporal Dead Zone (TDZ)

The TDZ is the time window where a variable exists but is still uninitialized, and therefore cannot be accessed in any way.
