const axios = require('axios');
axios.defaults.baseURL = 'https://www.udemy.com/api-2.0';
axios.defaults.headers.common['Authorization'] = process.env.USER_TOKEN;

module.exports.getCourses = async (req, res) => {
	try {
		const courses = await axios.get('/courses/?fields[course]=@all');
		if (courses.status === 200 && courses.data.error === false) {
			return res.status(200).json({
				success: true,
				msg: `Show all courses`,
				data: courses.data
			});
		} else
			return res.status(200).json({
				success: true,
				msg: `Show all courses`,
				data: courses.data
			});
	} catch (err) {
		if (err.response) {
			return res.status(500).json({ success: false, msg: err.response.data });
		} else {
			return res.status(500).json({ success: false, msg: err.message });
		}
	}
};

module.exports.getCourse = async (req, res) => {
	try {
		const course = await axios.get(
			`/courses/${req.params.id}/?fields[course]=@all`
		);

		if (!course) {
			console.log(`No course with id of ${req.params.id}`, 404);
		}

		res.status(200).json({
			success: true,
			msg: `show course with id ${req.params.id}`,
			data: course.data
		});
	} catch (err) {
		if (err.response) {
			return res
				.status(500)
				.json({ success: false, response: err.response.data });
		} else {
			return res.status(500).json({ success: false, msg: err.message });
		}
	}
};
