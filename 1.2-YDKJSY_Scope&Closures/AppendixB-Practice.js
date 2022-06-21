"use strict";

import { calculator as c, useCalc as uc } from './Appendix-module.js';

/*  >> Buckets of Marbles

    This exercise asks you to write a program—any program!
    that contains nested functions and block scopes, which satisfies
    these constraints:
    * If you color all the scopes (including the global scope!)
    different colors, you need at least six colors. Make sure to
    add a code comment labeling each scope with its color.
    BONUS: identify any implied scopes your code may
    have.
    * Each scope has at least one identifier.
    * Contains at least two function scopes and at least two
    block scopes.
    * At least one variable from an outer scope must be
    shadowed by a nested scope variable (see Chapter 3).
    * At least one variable reference must resolve to a variable
    declaration at least two levels higher in the scope chain.nfd

*/

//This is my scope 1 - PINK
{
    // This is my scope 2 - PURPLE

    let myColors = ["PINK", "PURPLE"];

    function /*Scope 3 - YELLOW*/addNewColor( newColor/*This is my scope 4 - GREEN*/){
        //scope 5 - ORANGE
        let newColorCaps = newColor.toUpperCase();
        myColors.push(newColorCaps);

        for(let i=0; i<myColors.length; i++){
            //Scope 6 - RED
            console.log(myColors[i]);
        }

    }

    //addNewColor("brown")
}


/* 
    >> Closure (PART 1)
    Let’s first practice closure with some common computermath
    operations: determining if a value is prime (has no divisors other 
    than 1 and itself), and generating a list of prime factors (divisors) 
    for a given number.

    The first part of this exercise is to use closure to implement a
    cache to remember the results of isPrime(..), so that the primality 
    (true or false) of a given number is only ever computed once.
*/

var factorizar = (function factorizar(v) {

    var losFactoriales = {};

    function factorizing(v) {
        if (!isNumPrime(v)) {
            let i = Math.floor(Math.sqrt(v));
            while (v % i != 0) {
                i--;
            }
            return [
                ...factorize(i),
                ...factorize(v / i)
            ];
        }
        function factorize(v) {
            if (!isNumPrime(v)) {
                let i = Math.floor(Math.sqrt(v));
                while (v % i != 0) {
                i--;
                }

                let endResult = [
                    ...factorize(i),
                    ...factorize(v / i)
                    ];

                losFactoriales[v] = endResult;
                return endResult;
            }
            return [v];
            } 
        losFactoriales[v] = [v];
        return [v];
    }

    return factorizing
    
})();

var isNumPrime = (function isPrime(v) {

    var primes = {};

    function prime(v){

        if (v in primes){
            return primes[v];
        }

        if (v <= 3) {
            return v > 1;
        }
        if (v % 2 == 0 || v % 3 == 0) {
            primes[v] = false;
            return primes[v];
        }
        var vSqrt = Math.sqrt(v);
        for (let i = 5; i <= vSqrt; i += 6) {
            if (v % i == 0 || v % (i + 2) == 0) {
                primes[v] = false;
                return primes[v];
            }
        }
        primes[v] = true;

        return primes[v];
    }

    return prime;
    
})();

isNumPrime(10);
factorizar(10); 
/*  >> Closure (PART 2)

    In this exercise, we’re going to again practive closure by
    defining a toggle(..) utility that gives us a value toggler.
    You will pass one or more values (as arguments) into toggle(..),
    and get back a function. That returned function will
    alternate/rotate between all the passed-in values in order, one
    at a time, as it’s called repeatedly.

    The corner case of passing in no values to toggle(..) is
    not very important; such a toggler instance could just always
    return undefined.
*/

    function toggle ( ...args ) {
        var i = 0;
        return function displayToggle( ){
            let arg = args[i];
            i = ( args.length + (i+1) ) % args.length;
            return arg;
        }
    }

    var hello = toggle("hello");
    var onOff = toggle("on","off");
    var speed = toggle("slow","medium","fast");

    
/*  >> Closure (PART 3)

    Implement a basic calculator. The calculator() function
    will produce an instance of a calculator that maintains its own
    state, in the form of a function calc(..).

    Each time calc(..) is called, you’ll pass in a single character
    that represents a keypress of a calculator button. To keep
    things more straightforward, we’ll restrict our calculator to
    supporting entering only digits (0-9), arithmetic operations
    (+, -, *, /), and “=” to compute the operation. Operations
    are processed strictly in the order entered; there’s no “( )”
    grouping or operator precedence.

    We don’t support entering decimals, but the divide operation
    can result in them. We don’t support entering negative
    numbers, but the “-“ operation can result in them. So, you
    should be able to produce any negative or decimal number by
    first entering an operation to compute it. You can then keep
    computing with that value.

    The return of calc(..) calls should mimic what would be
    shown on a real calculator, like reflecting what was just
    pressed, or computing the total when pressing “=”.
*/

function calc() {
    
    var num = '';
    var ops = []

    function op( key ){
        
        const operators = '/*-+'
        const numbers = '0123456789'

        if(operators.includes(key)){
            ops = [...ops,num,key];
            num = '';
            return key;
        } 
        else if (key === '='){
            ops = [...ops,num];
            num = '';
            return makeOp();
        }
        else if (numbers.includes(key)){
            num += key;
            return key;
        }
        return 'ERR';

    }

    function makeOp(){
        var value = ops[0];
        var operator = '';
        ops.forEach(element => {
            if(!isNaN(element)){
                if(operator!=''){
                    value = check(operator, Number(value), Number(element));
                }
            } else{
                operator = element;
            }
            
           // console.log(value);
        });
        
        return value;
    }

    function check(opr, val1,val2){

        switch (opr) {
            case '*':
                 return val1 * val2;
                break;
        
                case '/':
                    return val1 / val2;
                    break;
                    
                    case '+':
                        return val1 + val2;
                        break;

                        case '-':
                            return val1 - val2;
                            break;
        }
    }
    return op;
}

function useCalc(calc,keys) {
    keys = [...keys]
    var op = '';
    keys.forEach(key => {
        key=='='?op += '=':0
        op += calc(key)
    });
    return op;
}

var myCalc = calc()

useCalc(myCalc,'10/25*100=')

/*  >> Modules

    This exercise is to convert the calculator from Closure (PART
    3) into a module. 

    We’re not adding any additional functionality to the calculator,
    only changing its interface. Instead of calling a single
    function calc(..), we’ll be calling specific methods on the
    public API for each “keypress” of our calculator. The outputs
    stay the same.

    This module should be expressed as a classic module factory
    function called calculator(), instead of a singleton IIFE, so
    that multiple calculators can be created if desired.

    The public API should include the following methods:

    • number(..) (input: the character/number “pressed”)
    • plus()
    • minus()
    • mult()
    • div()
    • eq()

    As you work on this exercise, also spend some time considering
    the pros/cons of representing the calculator as a module as
    opposed to the closure-function approach from the previous
    exercise.

    BONUS: write out a few sentences explaining your thoughts.
    BONUS #2: try converting your module to other module formats,
    including: UMD, CommonJS, and ESM (ES Modules).
*/

var calc2 = c();

console.log(uc(calc2,"7*2*3="));
console.log(uc(calc2,"1/0="));
console.log(uc(calc2,"+50="));
console.log(uc(calc2,"10+50="));
console.log(uc(calc2,"50="));
console.log(uc(calc2,"+50="));
