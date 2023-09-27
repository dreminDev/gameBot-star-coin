const { UserModel } = require("../models/user");

const { createUser } = require("./create/user");

const UserManager = {
    get: (id, payload = { _id: 0, id: 1 }) => UserModel.findOne({ id }, payload).lean(),

    add: ({ id, referrerId }) => createUser(id, referrerId),

    
};

module.exports = {
    UserManager,
};