const Box = x => ({ map: f=> Box(f(x)),
                    fold: f => f(x),
                    toString: `Box(${x})`, 
                })

const nextCharForNumberString_ = str => {

    const trimmed = str.trim()
    const number = parseInt(trimmed)
    const nextNumber = new Number(number+1)

    return String.fromCharCode(nextNumber)

}

const nextCharForNumberString = str => 
    Box(str)
    .map(x => x.trim())
    .map(trimmed => parseInt(trimmed, 10))
    .map(number=> new Number(number + 1))
    .fold(String.fromCharCode)

const result = nextCharForNumberString('  64  ');

const first = xs => xs[0]

const halfTheFirstLargerNumber = xs =>
    Box(xs)
    .map(xs => xs.filter(x => x >= 20))
    .map(found => first(found)/2)
    .fold(answer => `The answer is ${answer}`)


const res = halfTheFirstLargerNumber([1,4,58]);

console.log(res)