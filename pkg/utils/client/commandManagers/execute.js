const commandList = {};

const commandEventList = {};

function executeCommand(msg) {
    const payload = msg?.eventPayload?.command || msg?.messagePayload?.command;

    if (typeof payload === 'undefined') {
        return { executeCommand: "I'm sending it to promo codes for verification." };
    }

    try {
        let executor = commandList?.[payload];
        if (typeof executor !== 'undefined') {
            executor(msg);
        }

        executor = commandEventList?.[payload];
        if (typeof executor !== 'undefined') {
            executor(msg);
        }

        new Error('executor not found');
    } catch (err) {
        console.error(err);
    }
}

function addCommand(nameExecutor, executor) {
    if (typeof nameExecutor !== 'string' || typeof executor !== 'function') {
        throw new Error('invalid addCommand args');
    }

    commandList[nameExecutor] = executor;
}

module.exports = {
    executeCommand,
    addCommand,
};
