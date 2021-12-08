const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: [true, 'Please enter your name']
	},
	username: {
		type: String,
		trim: true.valueOf,
		required: [true, 'Please enter your username']
	},
	email: {
		type: String,
		trim: true,
		required: [true, 'Please enter your email']
	},
	contact: {
		type: String,
		trim: true,
		required: [true, 'Please enter your contact']
	},
	city: {
		type: String,
		trim: true,
		required: [true, 'Please enter your city']
	},
	country: {
		type: String,
		trim: true,
		required: [true, 'Please enter your country']
	}
});

module.exports = mongoose.model('Profile', ProfileSchema);
