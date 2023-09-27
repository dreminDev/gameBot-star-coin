const { vkUtils } = require("../../../../../../adapters/vk/vkUtils");

function registerUserSend(userId) {
    const text = `Вау ля ты зареган бро`

    vkUtils.msg({
        peerId: userId,
        message: text
    });
};

function registerUserRefSend(userId, referrerId) {
    const text = `утебя новый рефик ${userId}`

    vkUtils.msg({
        peerId: referrerId,
        message: text
    })
};

module.exports = {
    registerUserSend,
    registerUserRefSend,
};