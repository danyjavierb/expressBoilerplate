const  mongoose = require  ('mongoose');

const categorySchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
});

module.exports = mongoose.models.category || mongoose.model('category', categorySchema);

