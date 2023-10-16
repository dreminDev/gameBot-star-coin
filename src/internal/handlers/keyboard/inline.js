const { keyboard, textButton, green, red } = require("./help");

const registerNickKeyboard = keyboard([
    [
        textButton({ 
            label: 'Попробовать еще раз',
            color: green,
        }),
    ]
]).inline();

const businessKeyboard = keyboard([
    [
        textButton({
            label: "Кофейня",
            color: green,
            payload: {
                command: 'purchase',
                id: 1,
            },
        }),
    ],
    [
        textButton({
            label: "Заправка",
            color: red,
            payload: {
                command: 'purchase',
                id: 2,
            },
        }),
    ],
    [
        textButton({
            label: "Парихмахерская",
            color: green,
            payload: {
                command: 'purchase',
                id: 3,
            },
        }), 
    ],
    [
        textButton({
            label: "Отель",
            color: red,
            payload: {
                command: 'purchase',
                id: 4,
            },
        }), 
    ],
    [
        textButton({
            label: "Кинотеатр",
            color: green,
            payload: {
                command: 'purchase',
                id: 5,
            },
        }), 
    ],
    [
        textButton({
            label: "Банк",
            color: red,
            payload: {
                command: 'purchase',
                id: 6,
            },
        }),
    ]
]).inline()

module.exports = {
    registerNickKeyboard,
    businessKeyboard
};