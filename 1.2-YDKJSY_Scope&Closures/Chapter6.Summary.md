# Chapter 6: Limiting Scope Exposure

###### The Principle of Least Privilege(POLP)
>requires that in a particular abstraction layer of a computing environment, every module (such as a process, a user, or a program, depending on the subject) must be able to access only the information and resources that are necessary for its legitimate purpose.

***Important:*** if the code you need to wrap a scope around has return, this, break, or continue in it, an IIFE is  robably not the best approach. In that case, you might look to create the scope with a block instead of a function.

A pair of curly braces {} will mean a block of code but not necesarally a new scope. A block only becomes a scope if necessary, to contain its block-scoped declarations (i.e., let or const). If a block of code contains either a let or const **then** it will become a scope.

- *Object literals* use { .. } curly-brace pairs to delimit their key-value lists, but such object values are not scopes.
- *class* uses { .. } curly-braces around its body definition, but this is not a block or scope.
- A *function* uses { .. } around its body, but this is not technically a block—it’s a single statement for the function body. It is, however, a (function) scope.
- The { .. } curly-brace pair on a switch statement (around the set of case clauses) does not define a block/scope.

## PadStart(): Useful method =)

The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string. If the legnth of the string given to the method is longer or equal to the one passed in the parametters the String will be returned as-is.

###### Syntax

>padStart(targetLength)
>padStart(targetLength, padString)

where...

*targetLength* is the desired length in the string
*padString* is the char that will fill the required positions

example:
```js 
var str1 = "1"
str1.padStart(2, '0'); //"01"
```




