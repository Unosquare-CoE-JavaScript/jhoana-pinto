
const { curry } = require("ramda");

const curriedFunction = a => b => a > b;

let fA = curriedFunction(55);

let fB = fA(150)

console.log(fB);

const replace = curry((regex, replacement, str) => 
    str.replace( regex, replacement )
)

const replaceVowels = replace(/[AEIOU]/ig, '*');

console.log(replaceVowels("Me llamo Jhoana"))