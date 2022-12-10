const { DaySale } = require("../models/models");
const ApiError = require("../error/ApiError");
const { Sequelize } = require("sequelize");

class DaySaleController {
	async create(req, res) {
		const { sum } = req.body;
		console.log(sum);
		const daySale = await DaySale.create({ date: Sequelize.fn("NOW"), sumOfSale: sum });
		return res.json(daySale);
	}

	async getAll(req, res) {
		const daySale = await DaySale.findAll();
		return res.json(daySale);
	}
}

module.exports = new DaySaleController();
