const { updates } = require("../../../../src/internal/adapters/vk/vk");

const { executeCommand } = require("../commandManagers/execute");

function updatesEvent() {
    updates.on('message_event', async (msg) => {
        executeCommand(msg);
    });
};

module.exports = {
    updatesEvent,
};