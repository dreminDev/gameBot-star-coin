function pointNumber (num) {
    return String(num)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        .replace(',', '.');
};

module.exports = {
    pointNumber,
};