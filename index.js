const { startVK, startApiVk } = require("./src/internal/adapters/vk/vk");

const { dbConnect } = require("./pkg/utils/client/mongodb/connect");
const { GlobalManager } = require("./src/internal/domain/user/storage/global/manager/globalManager");

const { initUserHandlers } = require("./pkg/utils/client/commandManagers/initCommand");
const { addCommand } = require("./pkg/utils/client/commandManagers/execute");

const { updatesMessage } = require("./pkg/utils/client/updatesVk/message");
const { updatesEvent } = require("./pkg/utils/client/updatesVk/event");

function main() {
    startVK();
    startApiVk();

    dbConnect();
    GlobalManager.add();

    initUserHandlers(addCommand);

    updatesMessage();
    updatesEvent();
};

main();