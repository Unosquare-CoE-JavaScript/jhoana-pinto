# Chapter 2: Illustrating Lexical Scope

###### *Key toughts on scopes*

- Variables are declared in specific scopes.

- Any variable reference that appears in the scope where it was declared, or appears in any deeper nested scopes, will belong and it will be able to be used in that scope.

- The determination of which data belongs to wich scope happens during compilation.

###### JS engine elements interaction

- **Engine:** responsible for start-to-finish compilation and execution of our JavaScript program.
- **Compiler:** handles parsing and code-generation.
- **Scope Manager:** collects and maintains a lookup list of all the declared variables/identifiers, and enforces a set of rules as to how these are accessible to currently executing code.

To review and summarize how a statement like var students = [ .. ] is processed, in two distinct steps:

1. Compiler sets up the declaration of the scope variable (since it wasn’t previously declared in the current scope).
2. While Engine is executing, to process the assignment part of the statement, Engine asks Scope Manager to look up the variable, initializes it to undefined so it’s ready to use, and then assigns the array value to it.

###### Basically...

A scope is the context of the code, meaning: in the stage my code is currently at which variables does it has access? lets take in count that functions are also "variables".

the scope is determined when the code is compiled and we call this scope a lexical scope.

A lexical scope can be nested into another, with the inner scope having access to the variables to the outer scopes but not the other way round. 
 
When a scope tries to access a variable out  of its reach the scope manager will throw a ReferenceError.

Other errors that can be thrown are:

- *SyntaxError:* when the syntaxis at some part of the code is wrong. represent faults in the program that stop it from even starting execution.

- *TypeError:* represent faults that arise during program execution.



