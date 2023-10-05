const { keyboard, textButton, green } = require("./help");

const registerNickKeyboard = keyboard([
    [
        textButton({ 
            label: 'Попробовать еще раз',
            color: green,
        }),
    ]
]).inline();

module.exports = {
    registerNickKeyboard
};