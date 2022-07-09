const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked!' + message);
}
if (button) {
    button.addEventListener('Click', clickHandler.bind(null, 'Yasss queen'));
}
