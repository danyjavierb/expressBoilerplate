const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    value: {type: Number, required: true},
    active: {type: Boolean, default: true},
    from: {type: Date, default: Date.now},
    until: {type: Date, required: true},
});

module.exports = mongoose.model('discount', discountSchema);

