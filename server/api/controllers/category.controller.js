const categoryService = require('../services/category.service');
const {BAD_REQUEST, CREATED} = require('http-status');
const l = require('../../common/logger').default;

module.exports = {
    findAll: (req, res) => {
        categoryService
            .findAll()
            .then(r => res.json(r));
    },
    create: (req, res) => {
        categoryService
            .create(req.body)
            .then(r => res
                .status(CREATED)
                .json(r))
    }
}