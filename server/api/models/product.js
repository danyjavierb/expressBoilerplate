const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    unit_price: {type: Number, required: true},
    description: {type: String},
    score: {type: Number},
    active: {type: Boolean, default: true},
    created_at: {type: Date, default: Date.now},
    categories:  [{type : mongoose.Schema.ObjectId, ref :'category'} ],
    images:  [{type : mongoose.Schema.ObjectId, ref :'image'} ],
    discounts:  [{type : mongoose.Schema.ObjectId, ref :'discount'} ]
});

module.exports = mongoose.models.product || mongoose.model('product', productSchema);

