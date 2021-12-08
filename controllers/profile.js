const Profile = require('../models/Profile.js');
module.exports.showProfile = async (req, res) => {
	try {
		const user = await Profile.findById(req.params.id);
		return res.status(200).json({ success: true, data: user });
	} catch (err) {
		res.status(400).json({ success: false, msg: err });
	}
};

module.exports.addProfile = async (req, res) => {
	try {
		const user = await Profile.create(req.body);
		console.log(user);
		return res.sendStatus(201).json({
			success: true,
			data: user
		});
	} catch (err) {
		return res.status(400).json({ success: false, msg: err });
	}
};

module.exports.updateProfile = async (req, res) => {
	try {
		return res.status(200).json({ success: true });
	} catch (err) {
		if (err.response) {
			return res.status(500).json({ success: false, msg: err.response.data });
		} else {
			return res.status(500).json({ success: false, msg: err.message });
		}
	}
};
