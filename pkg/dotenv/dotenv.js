require("dotenv").config();

const env = process.env;

const dotenv = {
    GROUP_TOKEN: env.GROUP_TOKEN,
    GROUP_API_TOKEN: env.GROUP_API_TOKEN,
    MONGO_URL: env.MONGO_URL,

    ADMINS_ID: env.ADMINS_ID,
};

module.exports = {
    dotenv,
};