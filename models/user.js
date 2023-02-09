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
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			gender: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			phone_number: {
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