const { GlobalModel } = require("../models/global");

const GlobalManager = {
    get: (payload) => GlobalModel.findOne({}, payload).lean(),

    add: async () => {
        const count = await GlobalModel.count();

        if (count) {
            return;
        };
        
        GlobalModel.create({});

        console.log('[ GLOBAL DOCUMENT CREATE ]');
    },
};

module.exports = {
    GlobalManager,
};