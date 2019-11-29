const productService = require('../services/product.service');
const {BAD_REQUEST, CREATED} = require('http-status');
const l = require('../../common/logger').default;

module.exports = {
    findAll: (req, res) => {
        productService
            .findAll()
            .then(r => res.json(r));
    },
    findById: (req, res) => {
        productService
            .findById(req.params.productId)
            .then(r => res.json(r))
            .catch(e => {
                l.error("error in request" + e.message);
                res.status(BAD_REQUEST);
                res.json({error: "invalid ID"})
            });
    },
    findAllByCategoryId: (req, res) => {
        productService
            .findProductsByCategory(req.params.categoryId)
            .then(r => res.json(r))
            .catch(e => {
                l.error("error in request" + e.message);
                res.status(BAD_REQUEST);
                res.json({error: "invalid ID"})
            });
    },
    create: (req, res) => {
        productService
            .create(req.body)
            .then(r => {
                    res
                        .status(CREATED)
                        .json(r)
                }
            )
    }
}