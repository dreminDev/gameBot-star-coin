const { keyboard, textButton, red, green, gray, blue } = require('./help');

const keyboardMain = (admin, selectedColor = blue) => {
    const arr = [
        [
            textButton({
                label: '🏠 Мой дом',
                color: green,
                payload: '',
            }),
            textButton({
                label: '🌏 Карта',
                color: red,
                payload: '',
            }),
        ],
        [
            textButton({
                label: '💼 Работа',
                color: red,
                payload: '',
            }),
            textButton({
                label: '🛍 Магазин',
                color: gray,
                payload: '',
            }),
            textButton({
                label: '💰 Бизнес',
                color: green,
                payload: '',
            }),
        ],
        [
            textButton({
                label: '🏆',
                color: gray,
                payload: '',
            }),
            textButton({
                label: '⭐',
                color: green,
                payload: '',
            }),
            textButton({
                label: '💬',
                color: red,
                payload: '',
            }),
            textButton({
                label: '⚙',
                color: gray,
                payload: '',
            }),
        ],
    ];

    if (admin) {
        arr.push([
            textButton({
                label: 'Админ-панель',
                color: red,
                payload: {
                    command: 'admin',
                },
            }),
        ]);
    }

    return keyboard(arr);
};

module.exports = {
    keyboardMain,
};
