const sequelize = new Sequelize("postgres://postgres:098890@localhost:5432/postgres");

const create = async () => {
	const createQuery = "CREATE DATABASE online_store";
	await sequelize
		.query(createQuery)
		.then(() => console.log("DB created"))
		.catch((err) => console.log("error creating DB", err));
};

create();
