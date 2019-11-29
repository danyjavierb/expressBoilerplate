const Discount = require('../models/discount');

module.exports = {
    create: async (discount) => {
        if (!discount)
            throw new Error('Missing product');
        await Discount.create(discount);
    }
};