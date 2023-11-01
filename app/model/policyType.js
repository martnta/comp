const mongoose = require('mongoose');

const PolicyTypeSchema = new mongoose.Schema({
	name: String,
	description: String,
	premium: String,
})
const PolicyType = new mongoose.Schema('PolicyType', PolicyTypeSchema)

module.exports = PolicyType