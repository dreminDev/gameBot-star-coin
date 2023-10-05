const { updates } = require("../../../../src/internal/adapters/vk/vk");

const { keyboardMain } = require("../../../../src/internal/handlers/keyboard/main");
const { executeCommand } = require("../commandManagers/execute");

const { validationUserRegister } = require("../../../../middleware/registerUser");
const { validationChat } = require("../../../../middleware/chat");

function updatesMessage() {
    updates.on('message_new', validationUserRegister, validationChat, async (msg) => {


        executeCommand(msg);
    });
};

module.exports = {
    updatesMessage,
};