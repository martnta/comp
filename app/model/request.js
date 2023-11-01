import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  reason: String,
  amount: Number,
  status: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user making the request
  policy: { type: mongoose.Schema.Types.ObjectId, ref: 'Policy' }, // Reference to the policy associated with the claim
  // Add other fields as needed
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
