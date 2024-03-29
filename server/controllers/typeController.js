const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");
const { json } = require("sequelize");

class TypeController {
	async create(req, res) {
		const { name } = req.body;
		const type = await Type.create({ name });
		return res.json(type);
	}

	async delete(req, res) {
		const { name } = req.query;
		const type = await Type.destroy({ where: { name: name } });
		return res.json(type);
	}

	async getAll(req, res) {
		const types = await Type.findAll();
		return res ? res.json(types) : json(types);
	}

	async getOne(req, res) {
		const { id } = req.params;
		const type = await Type.findOne({
			where: { id },
		});

		return res.json(type);
	}
}

module.exports = new TypeController();
