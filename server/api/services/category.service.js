const categoryModel = require('../models/category');

module.exports = {
    create: async (category) => {
        if (!category)
            throw new Error('Missing category');

        await categoryModel.create(category);
    },
    findAll: async () => {
        const categories = await categoryModel.find();
        return categories
    },
};