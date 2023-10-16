const { updates } = require("../../../../src/internal/adapters/vk/vk");

const { executeCommand } = require("../commandManagers/execute");

const { validationUser } = require("../../../../middleware/validationUser");
const { validationChat } = require("../../../../middleware/chat");
const { keyboardMain } = require("../../../../src/internal/handlers/keyboard/main");

function updatesMessage() {
    updates.on('message_new', async (msg) => {
        const validUser = validationUser(msg);

        if (validUser) {
            return;
        };

        const validChat = validationChat(msg);

        if (validChat) {
            return;
        };

        if (['меню', 'начать'].includes(msg.text.toLowerCase()) ) {
            return msg.send('меню', {
                keyboard: keyboardMain(user.isAdmin),
            });
        };

        executeCommand(msg);
    });
};

module.exports = {
    updatesMessage,
};