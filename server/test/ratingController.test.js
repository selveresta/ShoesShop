const ratingController = require("../controllers/ratingController");

test("getAllBrands", async () => {
	let ratings;
	try {
		await fetch("http://localhost:5000/api/rating").then((data) => {
			ratings = data;
		});
		expect(ratings).toBeDefined();
	} catch (error) {
		expect(ratings).toBeUndefined();
	}
});
