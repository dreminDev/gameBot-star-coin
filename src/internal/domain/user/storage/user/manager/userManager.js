const { UserModel } = require("../models/user");

const { createUser } = require("./create/user");

const UserManager = {
    get: (id, payload = { _id: 0, id: 1 }) => UserModel.findOne({ id }, payload).lean(),

    add: ({ id, referrerId }) => createUser(id, referrerId),

    setGender: ({ userId, gender }) => UserModel.updateOne({ 
        id: userId 
    }, {
        gender: gender,
    }),

    setNickName: ({ userId, nickname }) => UserModel.updateOne({ 
        id: userId 
    }, {
        nickname: nickname,
    }),
};

module.exports = {
    UserManager,
};