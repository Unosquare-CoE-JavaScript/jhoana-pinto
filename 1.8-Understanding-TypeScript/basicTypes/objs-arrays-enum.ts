enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Jhoana',
    age: 25,
    hobbies: ['sewing', 'cooking'],
    role : Role.ADMIN
};

if(person.role === Role.AUTHOR){
    console.log('is author');
} 

/* function combine( n1: number | string, n2: number | string ){
    let result;
    if( typeof n1 ==='number' && typeof n2 ==='number' ){
        result = n1 + n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;
}

const combinedAges = combine(26, 34);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames); */