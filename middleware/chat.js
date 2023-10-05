const validationChat = async (msg, next) => {
    if (msg.isChat) {
        return; 
    };

    next();
};

module.exports = {
    validationChat
};