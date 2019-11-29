'use strict';
const categoryService = require('../server/api/services/category.service');

const categories = [
    {
        _id: "507f1f77bcf86cd799439011",
        name: "shoes"
    },
    {
        _id: "507f1f77bcf86cd799439012",
        name: "tshirt"
    },
    {
        _id: "507f1f77bcf86cd799439013",
        name: "men"
    },
    {
        _id: "507f1f77bcf86cd799439014",
        name: "women"
    }
];

module.exports.up = async function (next) {

  categories.forEach(p => {
      categoryService.create(p)
    });
    next()
};

module.exports.down = function (next) {
    next()
};