const  mongoose = require  ('mongoose');

const imageSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    url: { type: String, required: true },
});

module.exports =mongoose.model.image || mongoose.model('image', imageSchema);

