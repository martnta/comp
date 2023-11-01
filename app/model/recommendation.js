const mongoose = require('mongoose');

const recommendationsSchema = new mongoose.Schema({
  recommendation: String,
  claim: { type: mongoose.Schema.Types.ObjectId, ref: 'Claim' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who created the recommendation
  // Add other fields as needed
});

const Recommendations = mongoose.model('Recommendations', recommendationsSchema);

module.exports = Recommendations;
