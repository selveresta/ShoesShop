const { Rating } = require("../models/models");
const ApiError = require("../error/ApiError");

class RatingController {
	async create(req, res, next) {
		console.log(req.body);
		const { rate, userId, itemId } = req.body;

		const oneRate = await Rating.findOne({ where: { userId: userId, itemId: itemId } });
		if (oneRate) {
			return next(ApiError.badRequest("User already rated"));
		}

		const rating = await Rating.create({ rate, userId, itemId });
		return res.json(rating);
	}

	async getAll(req, res) {
		const rating = await Rating.findAll();
		return res.json(rating);
	}

	async getOne(req, res, next) {
		const { id } = req.params;
		const rate = await Rating.findAll({
			where: { itemId: id },
		});

		if (rate.length === 0) {
			return next(ApiError.badRequest("Not Found Rate"));
		}

		return res.json(rate);
	}
}

module.exports = new RatingController();
