const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
  interactions: [{ type: Date }]
});

module.exports = mongoose.model('Client', clientSchema);
