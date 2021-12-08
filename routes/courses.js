const express = require('express');
const { getCourses, getCourse } = require('../controllers/course');
const router = express.Router();

router.route('/').get(getCourses);
router.route('/:id').get(getCourse);

module.exports = router;
