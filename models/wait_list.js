const { truncate } = require("fs");

module.exports = function (sequelize, DataTypes) {
	const wait_list = sequelize.define(
		"wait_list",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			diary_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: "wait_list",
			timestamps: true,
		}
	);
	return wait_list;
};