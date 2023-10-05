module.exports = async (msg, registerUser) => {
    try {
        const userId = msg.senderId || msg.userId;
        const genderPayload = msg?.messagePayload?.gender || msg?.eventPayload?.gender;
        const register = msg?.messagePayload?.register || msg?.eventPayload?.register || registerUser;

        if (register) {

        };
        

    } catch (err) {
        console.log(err);
    };
};