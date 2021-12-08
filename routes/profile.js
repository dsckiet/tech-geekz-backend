const express = require('express');
const {
	showProfile,
	addProfile,
	updateProfile
} = require('../controllers/profile');
const router = express.Router();

router.route('/:id').get(showProfile);
router.route('/new').post(addProfile);
router.route('/update').put(updateProfile);

module.exports = router;
