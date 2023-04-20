const { Sequelize } = require("sequelize");

const { Client } = require("pg");

const pgclient = new Client({
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	user: "postgres",
	password: "postgres",
	database: "postgres",
});

pgclient.connect();

pgclient.query('CREATE DATABASE "Online_store"', (err, res) => {
	console.log(err, res);
});

pgclient.end();

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	dialect: "postgres",
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
});
