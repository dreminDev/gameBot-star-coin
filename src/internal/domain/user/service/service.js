const { UserManager } = require("../storage/user/manager/userManager");

async function genderChange(userId, gender) {
    await UserManager.setGender({ 
        userId: userId,
        gender: gender
    })
};

async function nicknameChange(userId, nickname) {
    await UserManager.setNickName({
        userId: userId,
        nickname: nickname,
    });
};

module.exports = {
    genderChange,
    nicknameChange
};
