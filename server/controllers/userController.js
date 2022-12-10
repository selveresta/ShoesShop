const ApiError = require("../error/ApiError");
const bcypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const generateJwt = (id, email, role) => {
	return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: "24h" });
};

class UserController {
	async registration(req, res, next) {
		const { email, password, role } = req.body;
		console.log(email, password, role);
		if (!email || !password) {
			return next(ApiError.badRequest("Not correct data"));
		}

		const candidate = await User.findOne({ where: { email } });
		if (candidate) {
			return next(ApiError.badRequest("User already excisted"));
		}

		const hasPassword = await bcypt.hash(password, 5);
		const user = await User.create({ email, role, password: hasPassword });

		const basket = await Basket.create({ userId: user.id });

		const token = generateJwt(user.id, user.email, user.role);

		return res.json({ token });
	}

	async login(req, res, next) {
		const { email, password } = req.body;

		const user = await User.findOne({ where: { email } });
		if (!user) {
			return next(ApiError.internal("User not found"));
		}

		let comparePassword = bcypt.compareSync(password, user.password);

		if (!comparePassword) {
			return next(ApiError.internal("Uncorrect password"));
		}

		const token = generateJwt(user.id, user.email, user.role);

		return res.json({ token });
	}

	async check(req, res, next) {
		const token = generateJwt(req.user.id, req.user.email, req.user.role);

		return res.json({ token });
	}
}

module.exports = new UserController();
