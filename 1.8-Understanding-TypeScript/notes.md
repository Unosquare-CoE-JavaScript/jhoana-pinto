### What is typescript?

**A JS superset:** a language builing up on JS with new features and advantages.

- It can't be executed by browsers or node. When writing a TS script it'll be compiled and transformed into a JS script.

- use a '!' after requiring an input to notice that that input will be available for the file to read.

- use 'HTMLInputElement' to notice what kind of data you're passing

- to make an explicit declaration of what kind of params you'll use in a function add ': typeofdata' after the parametter. e.g. function(myNumber: number) { return myNumber + 5 }

### core types

- **numer:** all numbers, no differentiation between integers or floats
- **string:** with any type of quotes, all text values
- **boolean:** true and false, no truthy or falsy values
- **object:** any JS object, more specific types (type of object) are possible
- **Array:** any JS array, type can be flexible ( any[] ) or strict ( type[] ) (regarding the element types)
- **Tuple:** added by TS: Fixed-legth array, 'push' is allowed in tuples
- **Enum:** Added by TS: Automatically enumerated global constat identifiers _e.g. enum { NEW, OLD }_
- **Any:** Any kind of value, no specific type assignment. (If possible, don't use it)
- **Unknown:** More strict than Any. Adopts the typeValue of the value asign to it.
- **never:** functions can return it. Never returns anything because it crashes or stops the running srcipt

**JS** uses _"dynamic types"_(resolved at runtime) and **TS** uses _"static types"_(set during development)

- in **TS** types are written with all lower case letters, not capitals as you'll do in JS

- when declaring a variable that hasn't been initialized it's a good practice to specify what kind of data will be stored in it. e.g.

```ts
let number1: number;
```

Type aliases can be used to "create" your own types.

E.g.

```js
type User = { name: string, age: number };
const u1: User = { name: "Max", age: 30 }; // this works!
```

### compiling options

By running the command "tsc --init" in the project folder a 'tsconfig.json' file will be created and in it you can include the following options:

- **"exclude" : []**
- **"include" : []**
- **"files" : []**

**singletons:** ensures to allways have only one instance of a certain class.

**interfaces:** exists only in TS helps us to typecheck new objects. It forces the implementation of the methods inside it. It can't have the public/private properties but it can be readonly. It can extend and implement multiple interfaces.

**optional parametters:** _propertyName?: dataType;_ the '?'(undefined) symbol is a sign that that parametter is not necessary

### Intersection types

Using the next example:

```js
type x = {
  a: string,
  b: string[],
};

type y = {
  c: string,
  d: number,
};

type xy = x & y;
```

now the xy type will have the properties of both the x type and the y type. This method can be used with any type.

### Type Guards

Checks if a cerain property of method exists before using it.

- typeof x === 'type', to check datatype
- x in data, to check if property of object exists
- x instanceof myClass, to check if x is an instance of a certain class

### Type casting

helps to tell TS that some value will be of a specific type. e.g.

```ts
const textInput = <HTMLInputElement>document.getElementById("input")!;

const textInput = (<HTMLInputElement>(
  document.getElementById("input")!
)) as HTMLInputElement;

textInput.value = "Hi!";
```

### Index types

A feature that allows the creation of more flexible objects regarding the properties they might hold. e.g.

```ts
interface ErrorContainer {
  [prop: string]: string; // This is an index Type
}

const errorBag: ErrorContainer = { username: "User not found!" };
```

### Function overloads

Allows the definition of multiple function signatures. e.g.

```ts
function add(a: number, b: number): number; // This is a function overload
function add(a: string, b: boolean): string; // This too
function add(a: string, b: number): string; // This too
function add(a: number, b: boolean): string; // This too

function add(a: Combinable, b: Numeric) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return +a + +b;
}
```

### Optional chaining

The symbol '?' after a parametter checks if this element exists, if it does countinues with the next element. If it doesn't stops in that point. e.g.

```ts
const fetchedUserData = {
  id: "u1",
  name: "Jhoana",
  job: { title: "Developer", description: "Writes cool code" },
};

console.log(fetchedUserData?.job?.title);
```

### Nullish coalescing

Operator '??'. Checks if the value is 'null' or 'undefined'. If so, it'll jump to the fallback. e.g.

```ts
const userInput = "";
const storedData = userInput ?? "DEFAULT";

console.log(storedData); // Result: <empty string>

/////////////////////////////////////////////////

const userInput = null;
const storedData = userInput ?? "DEFAULT";

console.log(storedData); // Result: DEFAULT
```

### Generics

The generic is a kind of type, which can be further specified for example an Array. An array can include different elements such as strings, numbers, booleans, etc. We need to be more specific in order to prevent future mistakes.

### keyof

allows to tell the function which key of an object will be used: e.g.

```ts
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Jhoana" }, "name"));

////////////////////////////COMPILED WITH ERROR

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Jhoana" }, "age"));
// AGE KEY DOESN'T EXIST, TS WILL COMPLAIN
```

### Decorators

A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
