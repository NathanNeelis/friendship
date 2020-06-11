const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	},
	firstname: {
		type: String,
		required: true,
	},
	dob: {
		type: String,
		match: /^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/
	},
	location: {
		type: String,
		required: true,
	},
	interests: [{
		type: String,
		required: true,
	}],
	description: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
		required: true,
	},
	likes: {
		type: String,
		required: false,
	},
});

const User = mongoose.model('users', userSchema);

module.exports = User;