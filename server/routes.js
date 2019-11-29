const productRoutes = require('./api/routes/products');
const categoryRoutes = require('./api/routes/categories');
const express = require('express');
const router = express.Router();

export default function routes(app) {
  app.use('/api/v1/health-check', (req, res) => res.status(200).send('OK'));
  app.use('/api/v1/product', productRoutes);
  app.use('/api/v1/category', categoryRoutes);
};