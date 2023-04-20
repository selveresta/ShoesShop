const { Sequelize } = require("sequelize");

// const { Client } = require("pg");

// const pgclient = new Client({
// 	host: process.env.DB_HOST,
// 	port: process.env.DB_POST,
// 	user: "postgres",
// 	password: "098890",
// 	database: "postgres",
// });
// try {
// 	const start = async () => {
// 		await pgclient.connect();
// 		pgclient.query("CREATE DATABASE Online_store", (err, res) => {
// 			console.log(err, res);
// 			closeConnection();
// 		});
// 	};
// 	start();
// } catch (error) {
// 	closeConnection();
// }

// const closeConnection = async () => {
// 	await pgclient.end();
// };

const sequelize = new Sequelize("postgres://postgres:098890@localhost:5432/postgres");

const create = async () => {
	const createQuery = "CREATE DATABASE online_store";
	await sequelize
		.query(createQuery)
		.then(() => console.log("DB created"))
		.catch((err) => console.log("error creating DB", err));
};

create();

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	dialect: "postgres",
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
});
