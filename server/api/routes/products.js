const controller = require('../controllers/product.controller');
const express = require('express');
const router = express.Router();

router.route('/category/:categoryId')
    .get(controller.findAllByCategoryId);

router.route('/:productId')
    .get(controller.findById);

router.route('/')
    .get(controller.findAll)
    .post(controller.create);

module.exports = router;
