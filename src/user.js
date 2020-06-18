const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
	activated: {
		type: Number,
		required: false,
	},
	likes: {
		type: Array,
		required: false,
	},
});

userSchema.pre('save', function (next) {
	const user = this;

	if (!user.isModified('password')) {
		return next();
	}

	const hashPassword = (salt) => {
		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) {
				console.log(err);
			} else {
				user.password = hash;
				next();
			}
		});
	};

	bcrypt.genSalt(saltRounds, (err, salt) => {
		if (err) {
			console.log(err);
		} else {
			hashPassword(salt);
		}
	});
});

userSchema.methods.comparePassword = function (userPassword, callback) {
	bcrypt.compare(userPassword, this.password, (err, matches) => {
		if (err) {
			console.log(err);
		} else {
			callback(undefined, matches);
		}
	});
};

const User = mongoose.model('users', userSchema);

module.exports = User;