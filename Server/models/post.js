const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  snippetUrl: { type: String, required: false }, // Stores MinIO snippet URL
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
