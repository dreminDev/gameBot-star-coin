const { UserModel } = require('../../models/user');
const { registerUserSend, registerUserRefSend } = require('./send');

const { getTime } = require('../../../../../../../../pkg/utils/time/getTime');

const { dotenv } = require('../../../../../../../../pkg/dotenv/dotenv');

const log = console.log;

async function createUser(userId, referrerId = 0) {
    try {
        UserModel.create({
            id: userId,
            referrerId: referrerId,
            admin: dotenv.ADMINS_ID.includes(userId),
        })
            .then(() => log(`[ ${getTime()} || NER USER - ${userId} ]`))
            .catch(err => log(`ERROR CREATE USER - ${userId}`, err));

            registerUserSend(userId);

        if (referrerId && referrerId !== userId) {
            registerUserRefSend(userId, referrerId);
        };
    } catch (e) {
        console.log(e);
    };
};

module.exports = {
    createUser,
};
