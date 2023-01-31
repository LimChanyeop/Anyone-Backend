const { truncate } = require("fs");

module.exports = function (sequelize, DataTypes) {
	const exchange = sequelize.define(
		"exchange",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			diary_id_1: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			diary_id_2: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: "exchange",
			timestamps: true,
		}
	);
	return exchange;
};