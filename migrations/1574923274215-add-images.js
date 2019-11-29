'use strict';

const imagesService = require('../server/api/services/image.service');

const images = [
  {
    _id: "507f1f77bcf86cd799439091",
    url: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/030612dbacd84bd9951daa1d00b366f5_9366/Manchester_United_Icon_Long_Sleeve_Top_Red_DX9081_21_model.jpg"
  },
  {
    _id: "507f1f77bcf86cd799439092",
    url: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/0c7d1f9f1ed94f549710aa1d00b3930b_9366/Manchester_United_Icon_Long_Sleeve_Top_Red_DX9081_23_hover_model.jpg"
  },
  {
    _id: "507f1f77bcf86cd799439093",
    url: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/500e667ad2ef44519ad0aa030118e09f_9366/3_Stripes_T_Shirt_Grey_ED7593_21_model.jpg"
  },
  {
    _id: "507f1f77bcf86cd799439094",
    url: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/86e43b2703f34f388c4baa030118fb24_9366/3_Stripes_T_Shirt_Grey_ED7593_23_hover_model.jpg"
  },
  {
    _id: "507f1f77bcf86cd799439095",
    url: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/5a951d1b010f40af9028aa2c012779bc_9366/Supercourt_Shoes_Black_EE6038_01_standard.jpg"
  },
  {
    _id: "507f1f77bcf86cd799439096",
    url: "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/19ab55dd4bfa445fbf70aa2d007f17e9_9366/Supercourt_Shoes_Black_EE6038_010_hover_standard.jpg"
  }
];

module.exports.up = async function (next) {

  images.forEach(p => {
    imagesService.create(p)
  });
  next()
};

module.exports.down = function (next) {
  next()
};