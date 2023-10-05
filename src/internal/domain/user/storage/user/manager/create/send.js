const { vkUtils } = require('../../../../../../adapters/vk/vkUtils');

const sleep = require('../../../../../../../../pkg/utils/time/sleep');
const { genderItems } = require('../../../../../../handlers/usecase/gender/templateItems');

async function registerUserSend(userId) {
    vkUtils.msg({
        peerId: userId,
        message: '🎨 Давай начнём создание твоего персонажа',
    });

    const genderElements = genderItems(1).map(obj => {
        return {
            title: obj.title,
            description: obj.description,
            photo_id: obj.photo_id,
            buttons: obj.buttons,
        };
    });

    await sleep(400);

    vkUtils.msg({
        peerId: userId,
        message: '🚻 Выбери пол персонажа:',
        template: JSON.stringify({
            type: 'carousel',
            elements: genderElements,
        }),
    });
};

async function registerUserRefSend(userId, referrerId) {
    const text = `утебя новый рефик ${userId}`;

    vkUtils.msg({
        peerId: referrerId,
        message: text,
    });
};

module.exports = {
    registerUserSend,
    registerUserRefSend,
};
