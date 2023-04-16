const brandController = require("../controllers/brandController");

test("getAllBrands", () => {
	expect(brandController.getAll(null, null)).toBeDefined();
});
