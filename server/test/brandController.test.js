const brandController = require("../controllers/brandController");

test("getAllBrands", async () => {
	let brands;
	await fetch("http://localhost:5000/api/brand").then((data) => {
		brands = data;
	});
	expect(brands).toBeDefined();
});
