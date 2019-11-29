const Image = require('../models/image');

module.exports = {
    create: async (image) => {
        if (!image)
            throw new Error('Missing image');
        await Image.create(image);
    }
};