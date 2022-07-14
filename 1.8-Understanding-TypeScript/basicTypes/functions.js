function add(n1, n2) {
    return n1 + n2;
}
function printRes(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    // when declaring the return value as voi you just ignore the result, but if there's a result it'll be compiled correctly
    const res = n1 + n2;
    cb(res);
}
//let combinedValues: Function; //Declares that the type expected is any Function
//let combinedValues: () => number; //Declares that this var expects a function with no parametters and returns a 'number' value
let combinedValues; //Declares that this var expects a function with two num parametters and returns a 'number' value
combinedValues = add;
//combinedValues = 5;
console.log(combinedValues(8, 8));
printRes(add(5, 12));
addAndHandle(10, 20, res => console.log(res));
addAndHandle(10, 20, res => res + 5);
