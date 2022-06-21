const { curry, map, filter, test, reduce } = require("ramda");

const split = curry((delimeter, string) => string.split(delimeter));

//  >> Excercise 1

const result = split(' ')

result("Hola! me llamo Jhoana y estoy practicando")

//  >> Excercise 1a
//   Use map to make a new words fn that not only works on 1 string, but an array of strings

const mapFn = map(result);

console.log(mapFn(["Hola me llamo Jhoana", "Adiós, estoy ocupada"]))

//  >> Excercise 2
//  Use filter to keep the words including a Q only

const filterFn = filter(test(/q/));

console.log(filterFn(['quick', 'camels', 'quarry', 'over', 'quails']))

//  >> Exercise 3
//  Rewrite the function max to its "simplest form"

const _keepHighest = (x,y) => x >= y ? x : y // <- leave be

const max = function(xs) {
    return reduce(function(acc, x){
      return _keepHighest(acc, x);
    }, 0, xs);
  }

  
const maxS = reduce(_keepHighest, 0);

console.log(maxS([323,523,554,123,5234]))

// >> Bonus 1:
// wrap array's built in slice to be functional and curried like ramda fn's.
// //[1,2,3].slice(0, 2)

const slice = curry(( a, b, xs ) => xs.slice(a,b))

console.log(slice(1)(3)(['a', 'b', 'c']));

// Bonus 2:
// ============
// use slice to define a function take() that takes n elements from an array. make it curried
const take = slice(0);

console.log(take(2)([1,2,3,4,5,6,7,8,9]));