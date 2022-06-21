# Chapter 1: What's the Scope?

## Compiled vs Interpreted

**Cde compilation** is a set of steps that process the text of your code and turn it into a list of instructions the computer can understand. The whole source code is transformed at once, and those resulting instructions are saved as output (usually in a file) that can later be executed.

**Interpretation** has a different processing model: the source code is transformed line by line; each line or statement is executed before immediately proceeding to processing the next line of the source code.

## Compiling code

A program is processed by a compiler in three basic stages:

1. **Tokenizing/Lexing:** breaking up a string of characters into meaningful (to the language) chunks, called tokens.

    - *Tokenizing&Lexing:* if the tokenizer were to invoke stateful parsing rules to figure out whether a should be considered a distinct token or just part of another token, that would be lexing.

2. **Parsing:** taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program.

3. **Code generation:** taking an AST and turning it into executable code.


###### Lexical Scope

JS’s scope is determined at compile time; the term for this kind of scope is *“lexical scope”*. *“Lexical”* is associated with the *“lexing”* stage of compilation,