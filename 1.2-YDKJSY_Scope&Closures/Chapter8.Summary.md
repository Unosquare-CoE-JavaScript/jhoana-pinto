# Chapter 8: The Module Pattern

###### What Is a Module?
A module is a collection of related data and functions (often referred to as methods in this context), characterized by a division between hidden private details and public accessible details, usually called the “public API.” 

A module is also stateful: it maintains some information over time, along with functionality to access and update that information.

A module is different from... 

- ***Namespaces (Stateless Grouping).*** When you make a group of related functions but without data in it.

- ***Data Structures (Stateful Grouping).*** When you bundle data and stateful functions together, but without limiting the visibility of any of it.

So to clarify what makes something a classic module:

* There must be an outer scope, typically from a module factory function running at least once.
* The module’s inner scope must have at least one piece of hidden information that represents state for the module.
* The module must return on its public API a reference to at least one function that has closure over the hidden module state (so that this state is actually preserved).

###### Node CommonJS Modules

they use...
```js

module.exports.funtionToExport = funtionToExport;

// Or...

module.exports = {
// ..exports..
};

// But this is a better practice...

Object.assign(module.exports,{
// .. exports ..
});

```

###### Modern ES Modules (ESM)

ESM files are assumed to be strict-mode, without needing a "use strict" pragma at the top. There’s no way to define an ESM as non-strict-mode.

they use...
```js
export functionToExport;

//Also...
export function getName(studentID) {
    // ..
}
```

and...

```js
import { certainFunction } from "/path/folder/file.js";

// Also...

import certainFunction from "/path/folder/file.js";

// Or...

import { certainFunction as renamedFunction } from "/path/folder/file.js";

// To import everything exported

import * as Alias from "/path/folder/file.js";
```