const { set, connect } = require("mongoose");

const { getTime } = require("../../time/getTime");
const { dotenv } = require("../../../dotenv/dotenv");


function dbConnect() {
    set('strictQuery', true);

    connect(dotenv.MONGO_URL)
        .then(() => console.log(`[ ${getTime()} || CONNECT MONGODB ]`))
        .catch((err) => console.log(`[ ${getTime()} || MONGO ERR`, err));
};

module.exports = {
    dbConnect,
};