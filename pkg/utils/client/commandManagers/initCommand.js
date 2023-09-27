const profile = require("../../../../src/internal/handlers/usecase/profile");


function initUserHandlers(addCommand) {
    if (typeof addCommand !== 'function') {
        throw new Error("invalid init user handlers arguments")
    };

    addCommand("profile", profile);
};

module.exports = {
    initUserHandlers,
};