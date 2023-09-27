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

    "balance": {
        "type": "number",
        "default": 0,
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