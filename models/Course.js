const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
	id: { required: true },
	title: {
		type: String,
		trim: true,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	image_480x270: { required: true },
	headline: {
		type: String,
		required: true
	},
	primary_category: {
		type: Object,
		required: true
	},
	primary_subcategory: {
		type: Object,
		required: true
	},
	instructor_status: {
		type: Object,
		required: true
	},
	enroll_url: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Course', CourseSchema);
