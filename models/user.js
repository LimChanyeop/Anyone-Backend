const { truncate } = require("fs");

module.exports = function (sequelize, DataTypes) {
	const user = sequelize.define(
		"user",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			user_type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			deleted: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				default: false
			},
		},
		{
			sequelize,
			tableName: "user",
			timestamps: true,
		}
	);
	return user;
};