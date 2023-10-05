const { green } = require('../../keyboard/help');

const genderItems = (register = 0) => {
    return [
        {
            id: 1,
            title: 'Man',
            description: `ты мальчик? точно?`,
            photo_id: '-220806860_457239062',
            buttons: [
                {
                    action: {
                        type: 'text',
                        label: 'я мальчик',
                        payload: {
                            command: 'genderChange',
                            gender: 'men',
                            register: register,
                        },
                    },
                    color: green,
                },
            ],
        },
        {
            id: 2,
            title: 'Wooman',
            description: `лол девочки топ любить девушка`,
            photo_id: '-220806860_457239061',
            buttons: [
                {
                    action: {
                        type: 'text',
                        label: 'я девочка',
                        payload: {
                            command: 'genderChange',
                            gender: 'women',
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
    genderItems,
};
