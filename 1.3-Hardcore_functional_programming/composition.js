//  >>Composition: decompose nested functions

const R = require("ramda");

const add = (x, y) => x + y;
const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!';
const first = xs => xs[0];

const compose = (f, g) => x => f(g(x))

const shout = compose(compose(exclaim, first),toUpper);

shout('tears');


// Example Data
const CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// >>   Exercise 1
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

const _isLastInStock = cars => {
  var reversed_cars = R.last(cars)
  return R.prop('in_stock', reversed_cars)
}

const isLastInStock = R.compose(R.prop('in_stock'), R.last)

console.log(isLastInStock(CARS));

// >> Exercise 2
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

const nameOfFirstCar = R.compose(R.prop('name'), R.head)

console.log(nameOfFirstCar(CARS))

// >> Exercise 3
// Use the helper function _average to refactor averageDollarValue as a composition

const _average = function(xs) { return R.reduce(R.add, 0, xs) / xs.length; }; // <- leave be

const averageDollarValue = R.compose(_average,R.map(R.prop('dollar_value')));

console.log(averageDollarValue(CARS))

// Exercise 4
// Write a fn: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].

const _underscore = R.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

const sanitizeNames = R.map(R.compose(R.toLower, _underscore, R.prop('name')));

console.log(sanitizeNames(CARS));