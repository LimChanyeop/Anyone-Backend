const { truncate } = require("fs");

module.exports = function (sequelize, DataTypes) {
	const match = sequelize.define(
		"match",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			user_id_1: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			user_id_2: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			duration: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: "match",
			timestamps: true,
		}
	);
	return match;
};