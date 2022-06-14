# Chapter 2: Summary

- JS treats Files as programs, this way, if a file fails or contains an error, it won't prevent the next file form being processed.

- ' and " is the same thing, what matters is to choose one and use it consistantly throughout your code.

- The best practice is to use either ' or " for common strings and reserve ` for interpolated expressions.

## Variables identifiers

- **var.** declares a variable to be used in that part of
the program. Allows a usage in a wider scope.

- **let.** allows a more limited access to the variable than var.

- **const.** it must be given a value at the moment it’s declared, and cannot be re-assigned a different value later, but it can mutate.

## Null VS undefined

- **Undefined** means a variable has been declared but has not yet been assigned a value. Undefined is a type by itself. Unassigned variables are initialized by JavaScript with a default value of *undefined*.

- **Null** is an object. It can be assigned to a variable as a representation of no value. **JavaScript never sets a value to null.** That must be done programmatically.

## Funtcions

###### Function declaration

e.g.
```js
 function myFunction( myParametter ){
   return myResult;
 }
 ```

###### Function expression

This function is an expression that is assigned to a variable. 

e.g.

```js
 var myFunction = function( myParametter ){
    return myResult;
 }
```

## JS Organization

- **Class.** a definition of a “type” of custom data structure that includes both data and behaviors that operate on that data. Classes define how such a data structure works, but classes are not themselves concrete values.

    - **Method.** a function asign to a class.
    - **Instance.** term used to indicate that a new object has been created using a particular constructor.

- **Modules.** a collection of state and publicly exposed methods to operate on that state.