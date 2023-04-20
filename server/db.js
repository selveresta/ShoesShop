const { Sequelize } = require("sequelize");

const { Client } = require("pg");

const pgclient = new Client({
	host: process.env.DB_HOST,
	port: process.env.DB_POST,
	user: "postgres",
	password: "098890",
	database: "postgres",
});
try {
	const start = async () => {
		await pgclient.connect();
		pgclient.query("CREATE DATABASE Online_store", (err, res) => {
			console.log(err, res);
			pgclient.end();
		});
	};
	start();
} catch (error) {
	pgclient.end();
}

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	dialect: "postgres",
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
});
