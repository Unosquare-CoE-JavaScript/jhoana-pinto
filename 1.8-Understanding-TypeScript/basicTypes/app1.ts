let userInput: unknown;
let userName: string;

userInput = 10;
userInput = 'Maria'

if( typeof userInput === 'string' ){
    userName = userInput;
}

function generateError( message : string, code : number)
{
    throw { message: message, errorCode : code }
}

generateError('Opps!', 500)