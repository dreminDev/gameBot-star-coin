const { green } = require("../../keyboard/help");

const businessItems = (register = 0) => {
    return [
        {
            id: 1,
            title: 'Кофейня',
            photo_id: '-221012067_457239304',
            buttons: [
                {
                    action: {
                        type: 'text',
                        label: '😎 Покупаю',
                        payload: {
                            command: 'purchaseBusiness',
                            id: 1,
                            register: register,
                        },
                    },
                    color: green,
                },
            ],
        },
        {
            id: 2,
            title: 'Заправка',
            photo_id: '-221012067_457239305',
            buttons: [
                {
                    action: {
                        type: 'text',
                        label: '😎 Покупаю',
                        payload: {
                            command: 'purchaseBusiness',
                            id: 2,
                            register: register,
                        },
                    },
                    color: green,
                },
            ],
        },
        {
            id: 3,
            title: 'Парихмахерская',
            photo_id: '-221012067_457239306',
            buttons: [
                {
                    action: {
                        type: 'text',
                        label: '😎 Покупаю',
                        payload: {
                            command: 'purchaseBusiness',
                            id: 3,
                            register: register,
                        },
                    },
                    color: green,
                },
            ],
        },
        {
            id: 4,
            title: 'Отель',
            photo_id: '-221012067_457239307',
            buttons: [
                {
                    action: {
                        type: 'text',
                        label: '😎 Покупаю',
                        payload: {
                            command: 'purchaseBusiness',
                            id: 4,
                            register: register,
                        },
                    },
                    color: green,
                },
            ],
        },
        {
            id: 5,
            title: 'Кинотеатр',
            photo_id: '-221012067_457239308',
            buttons: [
                {
                    action: {
                        type: 'text',
                        label: '😎 Покупаю',
                        payload: {
                            command: 'purchaseBusiness',
                            id: 5,
                            register: register,
                        },
                    },
                    color: green,
                },
            ],
        },
        {
            id: 6,
            title: 'Банк',
            photo_id: '-221012067_457239309',
            description: "❗️Доступен только для Premium пользователей",
            buttons: [
                {
                    action: {                
                        type: 'text',
                        label: '😎 Покупаю',
                        payload: {
                            command: 'purchaseBusiness',
                            id: 6,
                            register: register,
                        },
                    },
                    color: green,
                },
            ],
        },
    ];
};

module.exports = {
    businessItems,
};
