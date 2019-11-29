const  controller = require  ('../controllers/category.controller');
const express = require('express');
const router = express.Router();

router.route('/')
    .get(controller.findAll);
// .put(productController.updateRule)
// .post(productController.create);

module.exports = router;
