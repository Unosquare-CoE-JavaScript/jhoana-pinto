type Combinable = number | string;
type CustomConv = 'number' | 'string'

function combine( 
    n1: Combinable, 
    n2: Combinable, 
    resType: CustomConv
    ){
        let result;
        if( typeof n1 ==='number' && typeof n2 ==='number' ){
            result = n1 + n2;
        } else {
            result = n1.toString() + n2.toString();
        }if (resType === 'number'){
            return +result;
        } else if( resType === 'string' ){
            return result.toString();
        }
        return result;
    }

const combinedAges = combine(26, 34, 'number');
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna', 'string');
console.log(combinedNames);