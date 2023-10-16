const { vkUtils } = require("../../../adapters/vk/vkUtils");
const { genderChange } = require("../../../domain/user/service/service");

const nicknameChange = require("../nickname/nicknameChange");

const { genderItems } = require("./templateItems");

const genderArray = ['men', 'women'];

module.exports = async (msg, registerUser) => {
    try {
        const userId = msg.senderId || msg.userId;
        const genderPayload = msg?.messagePayload?.gender || msg?.eventPayload?.gender;
        const register = msg?.messagePayload?.register || msg?.eventPayload?.register || registerUser;

        if (!genderArray.includes( String(genderPayload) )) {
            const genderElements = genderItems(register).map(obj => {
                return {
                    title: obj.title,
                    description: obj.description,
                    photo_id: obj.photo_id,
                    buttons: obj.buttons,
                };
            });

            const genderTemplate = JSON.stringify({
                type: 'carousel',
                elements: genderElements,
            }); 

            return vkUtils.msg({
                peerId: userId,
                message: '❌ Не верно, попробуйте ещё раз\n\nДля выбора нажми на кнопку 👇',
                template: genderTemplate
            });
        };

        await genderChange(userId, genderPayload);

        if (register) {
            nicknameChange(msg, true);
        };


    } catch (error) {
        console.log(error);
    };
};
