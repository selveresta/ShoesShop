const { Basket } = require("../models/models");
const { BasketItem } = require("../models/models");
const { Item } = require("../models/models");
const ApiError = require("../error/ApiError");
const { Op } = require("sequelize");

class BasketController {
	async create(req, res) {
		const { userId, itemId } = req.body;
		const basket = await Basket.findOne({ where: { userId } });
		const basketItems = await BasketItem.create({ itemId: itemId, basketId: basket.id });

		return res.json(basketItems);
	}

	async getBasket(req, res) {
		const { userId } = req.query;
		const basket = await Basket.findOne({ where: { userId } });

		const basketItems = await BasketItem.findAll({ where: { basketId: basket.id } });

		let tmp = [];
		basketItems.map((item) => {
			tmp.push({ id: item.itemId });
		});

		const items = await Item.findAll({ where: { [Op.or]: tmp } });

		return res.json(items);
	}

	async clearBasket(req, res) {
		const { userId } = req.body;
		const basket = await Basket.findOne({ where: { userId } });

		const basketItems = await BasketItem.destroy({ where: { basketId: basket.id } });

		return res.json(basketItems);
	}

	async deleteItemFromBasket(req, res) {
		// const { userId, itemId } = req.query;
		const { userId, itemId } = req.body;
		const basket = await Basket.findOne({ where: { userId } });

		const basketItems = await BasketItem.destroy({ where: { itemId: itemId, basketId: basket.id } });

		return res.json(basketItems);
	}
}

module.exports = new BasketController();
