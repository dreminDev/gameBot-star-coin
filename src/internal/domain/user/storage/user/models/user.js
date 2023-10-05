const { model } = require('mongoose');

function validateID(id) {
    return id > 0;
};

const UserModel = new model("users", {
    "id": {
        "type": "number",
        "validate": {
            "validator": validateID,
            "message": props => `${props.value} is not valid user id`
        },
        unique: true,
        "index": "true",
        "required": "true",
    },
    
    "referrerId": {
        "type": "number",
        "index": "true",
        "required": "true",
    },

    "nickname": {
        "type": "string",
        "default": '',
    },

    "gender": {
        "type": "string",
        "default": '',
    },

    "balance": {
        "type": "number",
        "default": 1_000_000,
    },

    "isRegister": {
        "type": "boolean",
        "default": "false",
    },

    "isBan": {
        "type": "boolean",
        "default": "false",
    },

    "isAdmin": { 
        "type": "boolean",
        "index": "true",
        "required": "true",
        "default": "false"
    },

});

module.exports = {
    UserModel,
};