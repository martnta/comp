const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  type: String,
  maxAmount: Number,
  minAmount: Number,
  eligibility: String,
  PolicyTypeId: {type: mongoose.Schema.Types.ObjectId, ref: 'PolicyType'}
  // Add other fields as needed
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
