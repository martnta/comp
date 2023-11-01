const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  role: String,
  image: String,
  emailVerified: String,
  // Add other fields as needed
  policy: { type: mongoose.Schema.Types.ObjectId, ref: 'Policy' }, // Reference to the associated policy
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
