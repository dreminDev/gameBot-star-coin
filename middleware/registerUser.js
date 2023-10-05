const { UserManager } = require('../src/internal/domain/user/storage/user/manager/userManager');
const genderChange = require('../src/internal/handlers/usecase/gender/genderChange');

const { keyboardMain } = require('../src/internal/handlers/keyboard/main');
const nicknameChange = require('../src/internal/handlers/usecase/nickname/nicknameChange');

const validationUserRegister = async (msg, next) => {
    const userId = msg.senderId;

    const user = await UserManager.get(userId, {
        _id: 0,
        id: 1,
        gender: 1,
        nickname: 1,
        isBan: 1,
        isRegister: 1,
        isAdmin: 1,
    });

    if (!user) {
        return UserManager.add({
            id: userId,
            referrerId: msg.referralValue,
        });
    }

    if (user.isBan) {
        return;
    };

    if (!user.isRegister) {
        if (!user.gender) {
            genderChange(msg, 1);
        } else if (!user.nickname) {
            nicknameChange(msg);
        } else if (!user.perDayInc) {

        };
    };

    if (['меню', 'начать'].includes(msg.text.toLowerCase()) ) {
        return msg.send('меню', {
            keyboard: keyboardMain(user.isAdmin),
        });
    };

    next(msg);
};

module.exports = {
    validationUserRegister,
};
