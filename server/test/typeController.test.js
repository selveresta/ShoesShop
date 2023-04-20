const typeController = require("../controllers/typeController");

test("getAllTypes", async () => {
	let types;
	try {
		await fetch("http://localhost:5000/api/type").then((data) => {
			types = data;
		});
		expect(types).toBeDefined();
	} catch (error) {
		expect(types).toBeDefined();
	}
});
