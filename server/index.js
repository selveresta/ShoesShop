require("dotenv").config();

const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const sequelize = require("./db");
const model = require("./models/models");
const router = require("./routes/index");
const ErrorHandler = require("./middleware/ErrorHandlingMiddleWare");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(ErrorHandler);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
	} catch (error) {
		console.log(e);
	}
};

start();
