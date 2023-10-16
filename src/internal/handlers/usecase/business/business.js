const { vkUtils } = require("../../../adapters/vk/vkUtils");

const { businessItems } = require("./templateItems");
const { businessPrice } = require("../../../../../config/business/businessPrice");

const { pointNumber } = require("../../../../../pkg/utils/formateNumber/pointNumber");
const { businessKeyboard } = require("../../keyboard/inline");

module.exports = async (msg, registerUser) => {
    try {
        const userId = msg.senderId || msg.userId;
        const genderPayload = msg?.messagePayload?.gender || msg?.eventPayload?.gender;
        const register = msg?.messagePayload?.register || msg?.eventPayload?.register || registerUser;
        const clientInfo = msg.clientInfo;

        if (clientInfo.carousel) {
            const businessElements = businessItems(register).map((obj) => {

                const incomePrice = businessPrice[obj.id - 1]?.income;
                const amountPrice = businessPrice[obj.id - 1]?.amount;

                return {
                    title: obj.title,
                    description: obj.id === 6 ? obj.description : `Доход: до ${pointNumber(incomePrice)} монет в минуту\nСтоимость: ${pointNumber(amountPrice)} монет`,
                    photo_id: obj.photo_id,
                    buttons: obj.buttons,
                };
            });

            const businessTemplate = JSON.stringify({
                type: 'carousel',
                elements: businessElements,
            }); 

            return vkUtils.msg({
                peerId: userId,
                message: 'выбери бизнес',
                template: businessTemplate
            });
        };

        if (!clientInfo.carousel) {
            return vkUtils.msg({
                peerId: userId,
                message: 'выбери бизнес',
                keyboard: businessKeyboard
            });
        };

    } catch (err) {
        console.log(err);
    };
};