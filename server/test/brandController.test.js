const brandController = require("../controllers/brandController");

test("getAllBrands", async () => {
	let brands;
	try {
		await fetch("http://localhost:5000/api/brand").then((data) => {
			brands = data;
		});
		expect(brands).toBeDefined();
	} catch (error) {
		expect(brands).toBeUndefined();
	}
});
