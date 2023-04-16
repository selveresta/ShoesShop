const typeController = require("../controllers/typeController");

test("getAllTypes", () => {
	expect(typeController.getAll(null, null)).toBeDefined();
});
