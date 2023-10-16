const { businessPrice } = require("../../../../../config/business/businessPrice");

module.exports = async (msg) => {
    try {
        console.log('msg')

        const businessId = msg?.messagePayload?.id;

        console.log('business id', businessId, 'count', businessPrice.length);

    } catch (err) {
        console.log(err)
    };
};