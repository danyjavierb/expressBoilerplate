const Product = require('../models/product');

module.exports = {
    create: async (product) => {
        if (!product)
            throw new Error('Missing product');
        return Product.create(product);
    },
    findAll: async () => {
        const products = await Product.find().populate(["categories", "images", "discounts"]);
        return products
    },
    findProductsByCategory: async (categoryId) => {
        const products = await Product.find({"categories": categoryId}).populate(["categories", "images", "discounts"]);
        return products
    },
    findById: async (id) => {
        return Product.findById(id).populate(["categories", "images", "discounts"]);
    },
};