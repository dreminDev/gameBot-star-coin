function getGenderText(gender) {
    if (gender === 'men') {
        return 'сделал';
    } else if (gender === 'women') {
        return 'сделала';
    };
};


module.exports = {
    getGenderText,
};