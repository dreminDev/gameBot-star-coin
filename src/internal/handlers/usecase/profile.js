module.exports = async (msg) => {
    const userId = msg.senderId;

    msg.send('init commit');
};