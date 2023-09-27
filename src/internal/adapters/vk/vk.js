const { VK } = require('vk-io');
const { QuestionManager } = require('vk-io-question');

const { getTime } = require('../../../../pkg/utils/time/getTime');
const { dotenv } = require('../../../../pkg/dotenv/dotenv');

const questionManager = new QuestionManager();

const log = console.log;

function startVK() {
    return new VK({
        token: dotenv.GROUP_TOKEN,
        apiMode: 'parallel_selected',
        apiLimit: 20,
    });
}

const { updates } = startVK();

function startApiVk() {
    return new VK({
        token: dotenv.GROUP_API_TOKEN,
        apiMode: 'parallel_selected',
        apiLimit: 20,
    });
}

const { api } = startApiVk();

updates.use(questionManager.middleware);

updates
    .start()
    .catch(console.error)
    .then(log(`[ ${getTime()} || VK STARTED ]`));

module.exports = {
    startVK,
    startApiVk,
    updates,
    api,
};
