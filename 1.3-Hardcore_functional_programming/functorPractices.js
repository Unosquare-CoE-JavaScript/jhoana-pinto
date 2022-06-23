const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  toString: () => `Box(${x})`,
  chain: f => f(x),
})

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces




// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat = str =>
    Box(str)
    .map(str => str.replace(/\$/, ''))
    .fold(answer => parseFloat(answer))


console.log(String(moneyToFloat('$5.00')))




// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat = str => 
    Box(str)
    .map(str => str.replace(/\%/, ''))
    .fold( answer => parseFloat(answer) * 0.0100)

console.log(String(percentToFloat('20%')))




// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
    /* 
    // Classic Form
    const applyDiscount = (price, discount) => 
    Box(moneyToFloat(price))
    .fold( cents => 
        Box(percentToFloat(discount))
        .fold( savings => cents - (cents * savings))
    ) */
    const applyDiscount = (price, discount) => 
    Box(moneyToFloat(price))
    .chain( cents => // chain will be used for nested boxes
        Box(percentToFloat(discount))
        .map( savings => cents - (cents * savings))
    ).fold(x => x)

console.log(String(applyDiscount('$5.00', '20%')))