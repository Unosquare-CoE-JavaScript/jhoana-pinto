/*
        new Promise constructor

        The Promise constructor is primarily used to wrap functions that do not already support promises.

        It takes a function as a parameter. This function will be executed inside the promise and it should 
        take two parametters res (resolve) and rej (reject) if there's any errors on the function execution 
        the promise will be rejected.

        the constructor returns a promise object.
*/

const timer = x => new Promise((res, rej) => {
        setTimeout(() => {
            if(x === 5){
                res('Correct number!')
            }
                
            rej('Wrong number!')
        }, 1000);
    })

timer(5).then(res => console.log(res)).catch(e => console.log(e))   // Result: "Correct number!"

/*
        promise.allSettle

        returns a promise that fullfilles after all its promises have either been resolved or rejected with 
        an array of objects that describe the result of each promise.
*/

const correctTimer = timer(5);
const incorrectTimer = timer(10);

const promises = [correctTimer, incorrectTimer];

Promise.allSettled(promises).then(results => console.log(results));

// Result
// [
//   { status: 'fulfilled', value: 'Correct number!' },        
//   { status: 'rejected', reason: 'Wrong number!' }
// ]

/*
        promise.any

        returns a single promise as soon as one of its promises are fulfilled. If all of its promises are
        rejected the returned promise will be rejected as well.
*/

const timer2 = new Promise((res, rej) => 
        setTimeout(() => {
            res('Resolved in 500 ms!')
        }, 500))

Promise.any([timer(5), timer(10), timer2]).then( res => console.log(res) ).catch(e => console.log(e))
// Result: "Resolved in 500 ms!";