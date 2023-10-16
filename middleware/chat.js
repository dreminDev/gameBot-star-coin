const validationChat = async (msg) => {
    console.log(`asdas`)

    if (msg.isChat) {
        return; 
    };

    return true;
};

module.exports = {
    validationChat
};