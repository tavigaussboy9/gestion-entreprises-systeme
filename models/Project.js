const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ['en_attente', 'en_cours', 'termine'], default: 'en_attente' },
  resources: { type: Number, required: true }
});

module.exports = mongoose.model('Project', projectSchema);
