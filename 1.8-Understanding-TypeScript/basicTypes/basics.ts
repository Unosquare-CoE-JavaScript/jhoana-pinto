
function add( n1: number, n2: number, showRes: boolean, phrase: string ){
    if(showRes){
        console.log(phrase, n1 + n2);
    } else{
        return n1 + n2
    }
}

const number1 = '10';
const number2 = 40;
const printRes = true;
const resPhrase = 'Result:';

add(+number1, +number2, printRes, resPhrase);