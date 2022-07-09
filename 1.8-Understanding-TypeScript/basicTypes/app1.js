let userInput;
let userName;
userInput = 10;
userInput = 'Maria';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Opps!', 500);
