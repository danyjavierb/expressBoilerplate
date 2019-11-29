'use strict';

const productService = require('../server/api/services/product.service');

const products = [
  {
    _id: "507f191e810c19729de860ea",
    name: "MANCHESTER UNITED ICON",
    unit_price: 38,
    description: "This football shirt celebrates the 20-year anniversary of Manchester United's record-breaking treble. It's designed with a commemorative shield-shaped badge on lightweight jacquard fabric. The front is embroidered with the hard-fought distinction, \"Treble Winners.\"",
    categories:["507f1f77bcf86cd799439012","507f1f77bcf86cd799439013"],
    images:["507f1f77bcf86cd799439091","507f1f77bcf86cd799439092"],
    score:3
  },
  {
    _id: "507f191e810c19729de860eb",
    name: "VINTAGE T-SHIRT WOMAN",
    unit_price: 18,
    description: "Made of soft cotton, this men's t-shirt has graphics inspired by retro shoe tongue labels. On the front is a Trefoil logo and \"The brand with the 3-Stripes\" in English, German and French. On the back the graphic is flipped for a mirror-image effect.",
    categories:["507f1f77bcf86cd799439012","507f1f77bcf86cd799439014"],
    images:["507f1f77bcf86cd799439093","507f1f77bcf86cd799439094"],
    discounts:["507f1f77bcf86cd799439080"],
    score:4
  }
  ,
  {
    _id: "507f191e810c19729de860ec",
    name: "SUPERCOURT SHOES",
    unit_price: 45,
    description: "The Supercourt distills 40 years of adidas tennis style. This version of the classic low-profile shoes has perforated 3-Stripes on a crisp leather upper. Decorative stitching and overlays add texture and depth for a multilayered look.",
    categories:["507f1f77bcf86cd799439011","507f1f77bcf86cd799439013"],
    images:["507f1f77bcf86cd799439095","507f1f77bcf86cd799439096"],
    score:5
  }
];
module.exports.up = async function (next) {

  products.forEach(p => {
    productService.create(p)
  });
  next()
};

module.exports.down = function (next) {
  next()
};
