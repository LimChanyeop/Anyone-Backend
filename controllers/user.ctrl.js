const models = require("../models");

exports.getUsers = async (req, res, next) => {
	try {
		const users = await models.user.findAll();
		res.json(users);
	} catch (error) {
		console.error(error);
		next(error);
	}
};