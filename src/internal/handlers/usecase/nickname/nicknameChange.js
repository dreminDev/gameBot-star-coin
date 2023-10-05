const isArabic = require("is-arabic");

const { vkUtils } = require('../../../adapters/vk/vkUtils');

const { nicknameChange } = require('../../../domain/user/service/service');
const { registerNickKeyboard } = require('../../keyboard/inline');

module.exports = async msg => {
    try {
        const userId = msg.senderId || msg.userId;

        const inputNickName = await msg.question(
            'Кто ты воин?\n\n✏ Выбери и напиши имя своего персонажа:',
        );

        const nickname = inputNickName.text;

        if (nickname.length < 3 || nickname.length > 18) {
            return vkUtils.msg({
                peerId: userId,
                message: '❌ Имя персонажа, не может\nбыть меньше 3 символов или больше 18 символов.',
                keyboard: registerNickKeyboard,
            });
        };

        const options = {
            count: nickname.length
        };

        if (isArabic(String(nickname), options)) {
            return vkUtils.msg({
                peerId: userId,
                message: '❌ Ты че араб? Имя нужно ввести на русском или английском. Также можешь использовать цифры, символы и смайлики',
                keyboard: registerNickKeyboard,
            }); 
        };

        const message = `👍 Хорошая работа, ${nickname}.\nТеперь ты готов к приключениям.`;

        await Promise.all([
            nicknameChange(userId, nickname),

            vkUtils.msg({
                peerId: userId,
                message: message,
            }),
        ]);
    } catch (error) {
        console.log(error);
    };
};
