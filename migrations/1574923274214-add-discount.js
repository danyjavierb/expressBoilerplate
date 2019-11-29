'use strict';

const discountService = require('../server/api/services/discount.service');

const until = new Date();
until.setTime( until.getTime() + 2 * 86400000 );
const categories = [
  {
    _id:"507f1f77bcf86cd799439080",
    name: "black friday discount",
    value: 50 ,
    until: until,
  }
];
module.exports.up = async function (next) {
  categories.forEach(p => {
    discountService.create(p)
  });
  next()
};

module.exports.down = function (next) {
  next()
};
