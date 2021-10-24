exports.getCourses = (req, res, next) => {
	return res.status(200).json({ success: true, msg: 'Show all Courses' });
};

exports.getCourse = (req, res, next) => {
	// DB PE QUERY
	//course_queries= courses.find();
	return res.status(200).json({
		success: true,
		msg: `Show course ${req.params.id}`,
		courseId: `${req.params.id}`,
		name: 'Course Name',
		category: 'Category Name',
		// tags: 'all tags',
		userId: 'username',
		review: 'String'
	});
};
