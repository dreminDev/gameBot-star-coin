const { updates } = require("../../../../src/internal/adapters/vk/vk");
const { UserManager } = require("../../../../src/internal/domain/user/storage/user/manager/userManager");

const { keyboardMain } = require("../../../../src/internal/handlers/keyboard/main");
const { executeCommand } = require("../commandManagers/execute");

function updatesMessage() {
    updates.on('message_new', async (msg) => {
        const userId = msg.senderId;

        if (msg.isChat) {
            return;
        };

        const user = await UserManager.get(userId, { 
            _id: 0, 
            id: 1, 
            ban: 1, 
            isAdmin: 1 
        });

        if (!user) {
            return UserManager.add({ 
                id: userId, 
                referrerId: msg.referralValue 
            });
        };

        if (user.isBan) {
            return;
        };

        if (['меню', 'начать'].includes(msg.text.toLowerCase()) ) {
			return msg.send('меню', {
				keyboard: keyboardMain(user.isAdmin),
	    	});
        };

        const command = executeCommand(msg);
    });
};

module.exports = {
    updatesMessage,
};