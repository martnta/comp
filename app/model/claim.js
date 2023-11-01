const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema({
  status: String,
  amount: Number,
  notes: String,
  recommendation: { type: mongoose.Schema.Types.ObjectId, ref: 'Recommendation' },
  policy: { type: mongoose.Schema.Types.ObjectId, ref: 'Policy' },
  // Add other fields as needed
});

const Claim = mongoose.model('Claim', claimSchema);

module.exports = Claim;
