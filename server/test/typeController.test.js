const typeController = require("../controllers/typeController");

test("getAllTypes", async () => {
	let types;
	await fetch("http://localhost:5000/api/type").then((data) => {
		types = data;
	});
	expect(types).toBeDefined();
});
